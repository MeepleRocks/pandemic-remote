import passports from "./json/passports";
import actions from "./json/actions";

const data = () => {
  // reduce data by unique passport id's into list of aliases
  const sorted = passports.reduce((acc, cur) => {
    const key = cur.passport;
    return { ...acc, [key]: [...(acc[key] ? acc[key] : []), cur] };
  }, {});
  // for each passport alias, parse fields into sub-objects
  // reduce the sub-objects into an array of objects
  // for each password
  const parsed = Object.entries(sorted).reduce(
    (primary, [passportId, aliases]) => {
      const data = aliases.map((alias) => {
        const newData = Object.entries(alias).reduce((secondary, [k, v]) => {
          if (!k.includes("__")) {
            return { ...secondary, [k]: v };
          }
          // find the prop, then the ent, merge in the sub and value
          const keys = k.split("__");
          const prop = keys[0];
          const ent = keys[1];
          const sub = keys[2];
          const value = v;

          return {
            ...secondary,
            [prop]: {
              ...(prop in secondary ? secondary[prop] : {}),
              [ent]: {
                ...(!secondary[prop]
                  ? {}
                  : ent in secondary[prop]
                  ? secondary[prop][ent]
                  : {}),
                [sub]: value,
              },
            },
          };
        }, {});
        newData.action = actions[newData.faction];
        return newData;
      });

      // return the primary acc with the parsed passport data
      return { ...primary, [passportId]: data };
    },
    {}
  );
  return parsed;
};

export default data;
