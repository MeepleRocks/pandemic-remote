import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const AliasInfo = ({ id, isExpanded }) => {
  const data = useSelector((state) => state.player[id]);

  const { passport, faction } = data;
  const alias = passport.find((ps) => ps.faction === faction.toString()) || {};
  const {
    action = {},
    asset: assetList = {},
    liability: liabilityList = {},
  } = alias;
  const assets = Object.values(assetList).filter((item) => item.title);
  const liabilities = Object.values(liabilityList).filter((item) => item.title);

  const tagStyle = {
    padding: "1rem",
    marginBottom: "1rem",
    fontSize: "0.75rem",
    maxWidth: "14rem",
  };

  return (
    <Grid container spacing={1}>
      <Grid item>
        <Paper style={tagStyle}>
          <div>
            <strong>{alias.role}</strong>
          </div>
          <div>{alias.description}</div>
        </Paper>
        <Paper style={tagStyle}>
          <div>
            <strong>{action.title}</strong>
          </div>
          <div>{action.description}</div>
        </Paper>
      </Grid>
      {isExpanded && (
        <Grid item>
          {Boolean(assets.length) &&
            assets.map((asset) => {
              return (
                <Paper style={tagStyle}>
                  <div>
                    <strong>{asset.title}</strong>
                  </div>
                  <div>{asset.description}</div>
                  {asset.city && <div>{asset.city}</div>}
                </Paper>
              );
            })}
          {Boolean(liabilities.length) &&
            liabilities.map((liability) => {
              return (
                <Paper style={tagStyle}>
                  <div>
                    <strong>{liability.title}</strong>
                  </div>
                  <div>{liability.description}</div>
                  {liability.city && <div>{liability.city}</div>}
                </Paper>
              );
            })}
        </Grid>
      )}
    </Grid>
  );
};

AliasInfo.propTypes = {
  id: PropTypes.string.isRequired,
};

export default AliasInfo;
