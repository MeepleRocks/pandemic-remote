import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import cx from "classnames";
import Paper from "@material-ui/core/Paper";
import "./AliasInfo.scss";

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

  return (
    <div className={cx({ AliasInfo: true, isExpanded: isExpanded })}>
      <div className="AliasInfo__primary">
        <Paper className="AliasInfo__tag">
          <strong>{alias.role}</strong>
          {alias.description}
        </Paper>
        <Paper className="AliasInfo__tag">
          <div>
            <strong>{action.title}</strong>
          </div>
          <div>{action.description}</div>
        </Paper>
      </div>
      <div className="AliasInfo__secondary">
        {Boolean(assets.length) &&
          assets.map((asset) => {
            return (
              <Paper className="AliasInfo__tag">
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
              <Paper className="AliasInfo__tag liability">
                <div>
                  <strong>{liability.title}</strong>
                </div>
                {`${liability.description} ${
                  liability.location ? liability.location : ""
                }`}
              </Paper>
            );
          })}
      </div>
    </div>
  );
};

AliasInfo.propTypes = {
  id: PropTypes.string.isRequired,
};

export default AliasInfo;
