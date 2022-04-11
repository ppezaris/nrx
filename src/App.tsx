import { useLocation } from "react-router-dom";
import "./App.css";
import Helmet from "react-helmet";
import { useHistory } from "react-router-dom";
import logo from "./logo2.svg";
import Draggable from "react-draggable";
import {
  VscBell,
  VscAccount,
  VscQuestion,
  VscSearch,
  VscGlobe,
  VscMail,
  VscArrowUp,
  VscArrowLeft,
  VscDashboard,
  VscDeviceMobile,
  VscEllipsis,
  VscBrowser,
  VscCompass,
  VscWarning,
  VscComment,
  VscGraphLine,
  VscInbox,
  VscServer,
  VscListFlat,
  VscGithubAction,
  VscPersonAdd,
  VscChevronDown,
  VscAdd,
  VscFeedback,
  VscChromeClose,
  VscCommentDiscussion,
  VscChromeMaximize,
  VscCopy,
  VscChevronLeft,
  VscBug,
  VscChevronRight,
  VscListFilter,
  VscMention,
  VscStarFull,
  VscStarEmpty,
  VscSettingsGear,
  VscCode,
  VscListUnordered,
  VscGear,
  VscChevronUp,
  VscCloseAll,
  VscClose,
  VscHome,
  VscPinned,
  VscPin,
} from "react-icons/vsc";
import {
  MdGridView,
  MdOutlineBubbleChart,
  MdOutlineWbSunny,
} from "react-icons/md";
import { CgScreen, CgSoftwareDownload } from "react-icons/cg";

import {
  BsClock,
  BsHexagon,
  BsQuestion,
  BsSlack,
  BsStar,
} from "react-icons/bs";
import { SiJirasoftware, SiMicrosoftteams } from "react-icons/si";

import {
  FiShare2,
  FiUserPlus,
  FiMessageSquare,
  FiChevronRight,
  FiChevronLeft,
} from "react-icons/fi";

import React, { ChangeEvent, KeyboardEvent } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import { Messages, Square, Unread } from "./Messages";
import { Comments } from "./Comments";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { RightPane } from "./RightPane";
var Reorder = require("react-reorder");

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

var LAST_CONTENT_SCROLL = 0;
var HEADER_SCROLL = 0;
export const Content = (props: any) => {
  const handleScroll = (e: any) => {
    console.warn(e);
    const $content = document.querySelector("#content-div");

    if ($content) {
      const top = $content.scrollTop;

      const $header = document.querySelector("#header-div");
      if ($header) {
        if (top > 0) $header?.classList.add("has-shadow");
        else $header.classList.remove("has-shadow");
      }
      return;

      // const delta = top - LAST_CONTENT_SCROLL;
      // if (top > LAST_CONTENT_SCROLL) {
      //   if (HEADER_SCROLL < -125) {
      //     // do nothing
      //   } else HEADER_SCROLL -= delta;
      // } else {
      //   if (HEADER_SCROLL < 0) {
      //     HEADER_SCROLL -= delta;
      //     if (HEADER_SCROLL > 0) HEADER_SCROLL = 0;
      //   }
      // }
      // LAST_CONTENT_SCROLL = top;
      // // const $header = document.querySelector("#header-div");
      // if ($header) $header.setAttribute("style", `top: ${HEADER_SCROLL}px`);
      // const $nav = document.querySelector(".nav");
      // if ($nav) $nav.setAttribute("style", `top: ${HEADER_SCROLL}px`);
      // const $thirdNav = document.querySelector(".horizontal .thirdnav");
      // if ($thirdNav)
      //   $thirdNav.setAttribute("style", `top: ${HEADER_SCROLL + 88}px`);
      // if (HEADER_SCROLL + LAST_CONTENT_SCROLL < 10)
      //   $thirdNav?.classList.remove("has-shadow");
      // else $thirdNav?.classList.add("has-shadow");
    }
  };

  return (
    <div
      onClick={props.onClick}
      className={"content " + (props.className || "")}
      onScroll={handleScroll}
      id="content-div"
    >
      {props.children}
    </div>
  );
};

export const Title = (props: any) => {
  return (
    <div className={`title ${props.className || ""}`}>
      <label>{props.children}</label>
      <div className="buttons">{props.buttons}</div>
    </div>
  );
};

export const SubTitle = (props: any) => {
  return (
    <div className="subtitle">
      <label>{props.children}</label>
      <div className="buttons">{props.buttons}</div>
    </div>
  );
};

export const Search = (props: any) => {
  return (
    <div className={`search ${props.className || ""}`}>
      {props.icon === "filter" ? (
        <VscListFilter className="search-icon" />
      ) : (
        <VscSearch className="search-icon" />
      )}
      <input
        type="search"
        placeholder={props.placeholder}
        value={props.value}
        autoFocus={props.autoFocus}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          props.onChange && props.onChange(e.target.value)
        }
      ></input>
      <div className="buttons">{props.buttons}</div>
    </div>
  );
};

const trClass = (entity: string, current: string) => {
  if (entity === current) return "active";
  else return "";
}

const APMEntities = (props: any) => {
  const handleClick = (type?: string) => {
    if (props.handleClick) props.handleClick(type);
  };
  return (
    <table className="messages explorer">
      <thead>
        <tr className="no-border">
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td colSpan={2} className="table-title">
            {!props.noTitle && (
              <>
                <VscChevronDown /> Services - APM
              </>
            )}
          </td>
          <td>Account</td>
          <td>End User</td>
          <td>Page Views</td>
          <td>Response</td>
          <td>Throughput</td>
          <td>Errors</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr className={trClass("FoodMe", props.entity)} onClick={() => handleClick("FoodMe")}>
          <td style={{ color: "yellow" }}>
            <VscStarFull />
          </td>
          <td>
            <Square color="green" />
            FoodMe
          </td>
          <td>New Relic</td>
          <td>-</td>
          <td>-</td>
          <td>36.14ms</td>
          <td>4</td>
          <td>3%</td>
          <td>
            <VscEllipsis />
          </td>
        </tr>
        <tr className={trClass("Kafka-admin (perf)", props.entity)} onClick={() => handleClick("Kafka-admin (perf)")}>
          <td style={{ color: "yellow" }}>
            <VscStarFull />
          </td>
          <td>
            <Square color="green" />
            Kafka-admin (perf)
          </td>
          <td>New Relic</td>
          <td>-</td>
          <td>-</td>
          <td>36.14ms</td>
          <td>4</td>
          <td>4%</td>
          <td>
            <VscEllipsis />
          </td>
        </tr>
        <tr className={trClass("Kafka-admin (stg-deep-tree)", props.entity)} onClick={() => handleClick("Kafka-admin (stg-deep-tree)")}>
          <td style={{ position: "relative" }}>
            <VscStarEmpty />
          </td>
          <td>
            <Square color="red" />
            Kafka-admin (stg-deep-tree)
          </td>
          <td>New Relic</td>
          <td>-</td>
          <td>-</td>
          <td>36.14ms</td>
          <td>4</td>
          <td>2.3%</td>
          <td>
            <VscEllipsis />
          </td>
        </tr>
        <tr className={trClass("Kafka-admin (stg-tree)", props.entity)} onClick={() => handleClick("Kafka-admin (stg-tree)")}>
          <td>
            <VscStarEmpty />
          </td>
          <td>
            <Square color="green" />
            Kafka-admin (stg-tree)
          </td>
          <td>New Relic</td>
          <td>-</td>
          <td>-</td>
          <td>36.14ms</td>
          <td>4</td>
          <td>7.1%</td>
          <td>
            <VscEllipsis />
          </td>
        </tr>
        <tr className={trClass("kafka-admin (stg-showy-brain)", props.entity)} onClick={() => handleClick("kafka-admin (stg-showy-brain)")}>
          <td>
            <VscStarEmpty />
          </td>
          <td>
            <Square color="gray" />
            kafka-admin (stg-showy-brain)
          </td>
          <td>New Relic</td>
          <td>-</td>
          <td>-</td>
          <td>36.14ms</td>
          <td>4</td>
          <td>5%</td>
          <td>
            <VscEllipsis />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const OpenTelemetryEntities = (props: any) => {
  const handleClick = (type?: string) => {
    if (props.handleClick) props.handleClick(type);
  };
  return (
    <table className="messages explorer">
      <thead>
        <tr className="no-border">
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td colSpan={2} className="table-title">
            {!props.noTitle && (
              <>
                <VscChevronDown /> Services - OpenTelemetry
              </>
            )}
          </td>
          <td>Account</td>
          <td>End User</td>
          <td>Page Views</td>
          <td>Response</td>
          <td>Throughput</td>
          <td>Errors</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr className={trClass("BeerMe", props.entity)} onClick={() => handleClick("BeerMe")}>
          <td style={{ color: "yellow" }}>
            <VscStarFull />
          </td>
          <td>
            <Square color="green" />
            BeerMe
          </td>
          <td>New Relic</td>
          <td>-</td>
          <td>-</td>
          <td>36.14ms</td>
          <td>4</td>
          <td>3%</td>
          <td>
            <VscEllipsis />
          </td>
        </tr>
        <tr className={trClass("K2-admin (perf)", props.entity)} onClick={() => handleClick("K2-admin (perf)")}>
          <td style={{ color: "yellow" }}>
            <VscStarFull />
          </td>
          <td>
            <Square color="green" />
            K2-admin (perf)
          </td>
          <td>New Relic</td>
          <td>-</td>
          <td>-</td>
          <td>36.14ms</td>
          <td>4</td>
          <td>3%</td>
          <td>
            <VscEllipsis />
          </td>
        </tr>
        <tr className={trClass("K2-admin (stg-deep-tree)", props.entity)} onClick={() => handleClick("K2-admin (stg-deep-tree)")}>
          <td style={{ position: "relative" }}>
            <VscStarEmpty />
          </td>
          <td>
            <Square color="red" />
            K2-admin (stg-deep-tree)
          </td>
          <td>New Relic</td>
          <td>-</td>
          <td>-</td>
          <td>36.14ms</td>
          <td>4</td>
          <td>3%</td>
          <td>
            <VscEllipsis />
          </td>
        </tr>
        <tr className={trClass("K2-admin (stg-tree)", props.entity)} onClick={() => handleClick("K2-admin (stg-tree)")}>
          <td>
            <VscStarEmpty />
          </td>
          <td>
            <Square color="green" />
            K2-admin (stg-tree)
          </td>
          <td>New Relic</td>
          <td>-</td>
          <td>-</td>
          <td>36.14ms</td>
          <td>4</td>
          <td>3%</td>
          <td>
            <VscEllipsis />
          </td>
        </tr>
        <tr className={trClass("K2-admin (stg-showy-brain)", props.entity)} onClick={() => handleClick("K2-admin (stg-showy-brain)")}>
          <td>
            <VscStarEmpty />
          </td>
          <td>
            <Square color="gray" />
            K2-admin (stg-showy-brain)
          </td>
          <td>New Relic</td>
          <td>-</td>
          <td>-</td>
          <td>36.14ms</td>
          <td>4</td>
          <td>3%</td>
          <td>
            <VscEllipsis />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const MobileEntities = (props: any) => {
  const handleClick = (type?: string) => {
    if (props.handleClick) props.handleClick(type);
  };
  return (
    <table className="messages explorer">
      <thead>
        <tr className="no-border">
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td colSpan={2} className="table-title">
            {!props.noTitle && (
              <>
                <VscChevronDown /> Mobile
              </>
            )}
          </td>
          <td>Account</td>
          <td>End User</td>
          <td>Page Views</td>
          <td>Response</td>
          <td>Throughput</td>
          <td>Errors</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr className={trClass("Rox mobile app", props.entity)} onClick={() => handleClick("Rox mobile app")}>
          <td style={{ color: "yellow" }}>
            <VscStarFull />
          </td>
          <td>
            <Square color="green" />
            Rox mobile app
          </td>
          <td>New Relic</td>
          <td>-</td>
          <td>-</td>
          <td>36.14ms</td>
          <td>4</td>
          <td>3%</td>
          <td>
            <VscEllipsis />
          </td>
        </tr>
        <tr className={trClass("Rafka React Native", props.entity)} onClick={() => handleClick("Rafka React Native")}>
          <td style={{ color: "yellow" }}>
            <VscStarFull />
          </td>
          <td>
            <Square color="green" />
            Rafka React Native
          </td>
          <td>New Relic</td>
          <td>-</td>
          <td>-</td>
          <td>36.14ms</td>
          <td>4</td>
          <td>3%</td>
          <td>
            <VscEllipsis />
          </td>
        </tr>
        <tr className={trClass("Shu Mobile", props.entity)} onClick={() => handleClick("Shu Mobile")}>
          <td style={{ position: "relative" }}>
            <VscStarEmpty />
          </td>
          <td>
            <Square color="red" />
            Shu Mobile
          </td>
          <td>New Relic</td>
          <td>-</td>
          <td>-</td>
          <td>36.14ms</td>
          <td>4</td>
          <td>3%</td>
          <td>
            <VscEllipsis />
          </td>
        </tr>
        <tr className={trClass("Kafka-admin (stg-tree)", props.entity)} onClick={() => handleClick("Kafka-admin (stg-tree)")}>
          <td>
            <VscStarEmpty />
          </td>
          <td>
            <Square color="green" />
            Kafka-admin (stg-tree)
          </td>
          <td>New Relic</td>
          <td>-</td>
          <td>-</td>
          <td>36.14ms</td>
          <td>4</td>
          <td>3%</td>
          <td>
            <VscEllipsis />
          </td>
        </tr>
        <tr className={trClass("Tango Training Mobile App", props.entity)} onClick={() => handleClick("Tango Training Mobile App")}>
          <td>
            <VscStarEmpty />
          </td>
          <td>
            <Square color="gray" />
            Tango Training Mobile App
          </td>
          <td>New Relic</td>
          <td>-</td>
          <td>-</td>
          <td>36.14ms</td>
          <td>4</td>
          <td>3%</td>
          <td>
            <VscEllipsis />
          </td>
        </tr>
        <tr className={trClass("Filmore Mobile", props.entity)} onClick={() => handleClick("Filmore Mobile")}>
          <td>
            <VscStarEmpty />
          </td>
          <td>
            <Square color="gray" />
            Filmore Mobile
          </td>
          <td>New Relic</td>
          <td>-</td>
          <td>-</td>
          <td>36.14ms</td>
          <td>4</td>
          <td>3%</td>
          <td>
            <VscEllipsis />
          </td>
        </tr>
        <tr className={trClass("Wizards", props.entity)} onClick={() => handleClick("Wizards")}>
          <td>
            <VscStarEmpty />
          </td>
          <td>
            <Square color="gray" />
            Wizards
          </td>
          <td>New Relic</td>
          <td>-</td>
          <td>-</td>
          <td>36.14ms</td>
          <td>4</td>
          <td>3%</td>
          <td>
            <VscEllipsis />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const HostsEntities = (props: any) => {
  const handleClick = (type?: string) => {
    if (props.handleClick) props.handleClick(type);
  };
  return (
    <table className="messages explorer">
      <thead>
        <tr className="no-border">
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td colSpan={2} className="table-title">
            {!props.noTitle && (
              <>
                <VscChevronDown /> Hosts
              </>
            )}
          </td>
          <td>Account</td>
          <td>Provider</td>
          <td>Response</td>
          <td>Throughput</td>
          <td>Errors</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr className={trClass("pd-mailin-10-101-0-230.codestream.us", props.entity)} onClick={() => handleClick("pd-mailin-10-101-0-230.codestream.us")}>
          <td style={{ color: "yellow" }}>
            <VscStarFull />
          </td>
          <td>
            <Square color="green" />
            pd-mailin-10-101-0-230.codestream.us
          </td>
          <td>New Relic</td>
          <td>-</td>
          <td>-</td>
          <td>36.14ms</td>
          <td>4</td>
          <td>3%</td>
          <td>
            <VscEllipsis />
          </td>
        </tr>
        <tr
        className={trClass("ip-172-31-11-129.eu-central-1.compute.internal", props.entity)} 
          onClick={() =>
            handleClick("ip-172-31-11-129.eu-central-1.compute.internal")
          }
        >
          <td>
            <VscStarEmpty />
          </td>
          <td>
            <Square color="green" />
            ip-172-31-11-129.eu-central-1.compute.internal
          </td>
          <td>New Relic</td>
          <td>-</td>
          <td>-</td>
          <td>36.14ms</td>
          <td>4</td>
          <td>3%</td>
          <td>
            <VscEllipsis />
          </td>
        </tr>
        <tr className={trClass("pd-api-20-101-0-237.codestream.us", props.entity)} onClick={() => handleClick("pd-api-20-101-0-237.codestream.us")}>
          <td style={{ position: "relative" }}>
            <VscStarEmpty />
          </td>
          <td>
            <Square color="red" />
            pd-api-20-101-0-237.codestream.us
          </td>
          <td>New Relic</td>
          <td>-</td>
          <td>-</td>
          <td>36.14ms</td>
          <td>4</td>
          <td>3%</td>
          <td>
            <VscEllipsis />
          </td>
        </tr>
        <tr
        className={trClass("ip-172-31-19-164.eu-central-1.compute.internal", props.entity)} 
          onClick={() =>
            handleClick("ip-172-31-19-164.eu-central-1.compute.internal")
          }
        >
          <td>
            <VscStarEmpty />
          </td>
          <td>
            <Square color="red" />
            ip-172-31-19-164.eu-central-1.compute.internal
          </td>
          <td>New Relic</td>
          <td>-</td>
          <td>-</td>
          <td>36.14ms</td>
          <td>4</td>
          <td>3%</td>
          <td>
            <VscEllipsis />
          </td>
        </tr>
        <tr
        className={trClass("ip-172-31-24-116.eu-central-1.compute.internal", props.entity)} 
          onClick={() =>
            handleClick("ip-172-31-24-116.eu-central-1.compute.internal")
          }
        >
          <td>
            <VscStarEmpty />
          </td>
          <td>
            <Square color="gray" />
            ip-172-31-24-116.eu-central-1.compute.internal
          </td>
          <td>New Relic</td>
          <td>-</td>
          <td>-</td>
          <td>36.14ms</td>
          <td>4</td>
          <td>3%</td>
          <td>
            <VscEllipsis />
          </td>
        </tr>
      </tbody>
    </table>
  );
};
const Step = (props: any) => {
  const [active, setActive] = React.useState(false);
  const [checked, setChecked] = React.useState(false);

  return (
    <div
      className={checked ? "step checked" : "step"}
      onClick={() => {
        setActive(!active);
        setChecked(true);
      }}
    >
      <div>
        <div className="step-number">{checked ? "✔" : props.number}</div>
        <div className="step-title">{props.title}</div>
        {props.children}
      </div>
      {active && (
        <div className="active">
          <div className="step-number">{props.number}</div>
          <div className="step-title">{props.title}</div>
          <div className="step-body">Video goes here...</div>
          <button className="primary rounded">Get started</button>
        </div>
      )}
    </div>
  );
};

const Plugin = (props: any) => {
  const { plugin = {} } = props;
  const item = plugin;
  const to = plugin.isDefault
    ? props.subdir || "/"
    : (props.subdir || "/") +
      (plugin.url ||
        plugin.title
          .toLocaleLowerCase()
          .replace(" ", "-")
          .replace(" ", "-")
          .replace("&", ""));
  return (
    <div className="plugin">
      <div className="plugin-icon">
        <img src={plugin.icon} />
      </div>
      <div>
        <div className="plugin-title">{plugin.title}</div>
        <div className="plugin-body">{plugin.body}</div>
        <NavLink
          to={to}
          activeClassName="active"
          onClick={(e) => {
            if (item.onClick) {
              item.onClick();
              e.stopPropagation();
              e.preventDefault();
              return false;
            } else if (item.openCommandPalette) {
              props.setCommandPanelOpen(!props.commandPanelOpen);
              e.stopPropagation();
              e.preventDefault();
              return false;
            }
            if (item.noComment) props.setCommentsState("closed");
          }}
          className={
            (props.className || item.className || "") + item.isNew ? " new" : ""
          }
        >
          <span className="label">View</span>
          {item.extra && item.extra}
        </NavLink>{" "}
        | Docs |{" "}
        <a
          onClick={() =>
            props.pin({
              ...plugin,
              label: plugin.title,
              icon: <img src={plugin.icon} />,
            })
          }
        >
          Pin
        </a>
      </div>
    </div>
  );
};

const Capability = (props: any) => {
  const { capability = {} } = props;
  const item = capability;
  const to =
    capability.isDefault && props.subdir
      ? props.subdir
      : (props.subdir || "/") +
        (capability.url ||
          capability.label
            .toLocaleLowerCase()
            .replace(" ", "-")
            .replace(" ", "-")
            .replace("&", ""));
  const index = props.nav.findIndex((i: any) => i.label === capability.label);
  return (
    <NavLink
      to={to}
      activeClassName="active"
      onClick={(e) => {
        if (item.onClick) {
          item.onClick();
          e.stopPropagation();
          e.preventDefault();
          return false;
        } else if (item.openCommandPalette) {
          props.setCommandPanelOpen(!props.commandPanelOpen);
          e.stopPropagation();
          e.preventDefault();
          return false;
        }
        if (item.noComment) props.setCommentsState("closed");
      }}
      className="capability-link"
    >
      <div className="capability">
        <div className="capability-icon">{capability.icon}</div>
        <div>
          <div className="capability-title">{capability.label}</div>
          <div className="capability-body">{capability.body}</div>
          <a>View</a> |{" "}
          <a
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              props.docs(capability);
            }}
          >
            Docs
          </a>{" "}
          |{" "}
          <a
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              props.pin(capability);
            }}
          >
            {(index > -1 && !props.nav[index].hidden) ? "Unpin" : "Pin"}
          </a>
        </div>
      </div>
    </NavLink>
  );
};

const Plugins = (props: any) => {
  const [scrolled, setScrolled] = React.useState(false);
  const query = (props.q || "").toLocaleLowerCase();
  const plugins = (props.plugins || []).filter((p: any) => {
    const title = p.title || p.label || "";
    const body = p.body || p.label || "";
    return (
      !query ||
      title.toLocaleLowerCase().includes(query) ||
      body.toLocaleLowerCase().includes(query)
    );
  });
  if (plugins.length === 0) return null;
  return (
    <div className="plugins-wrapper">
      <SubTitle>
        <label>{props.title}</label>
        <span className="show-all">
          Show All <VscChevronRight />
        </span>
      </SubTitle>
      <div
        className={`plugins ${props.className || ""} ${
          scrolled ? "scrolled" : ""
        }`}
      >
        {plugins.map((p: any) => (
          <Plugin plugin={p} pin={props.pin} />
        ))}
        <div className="scroll-right" onClick={() => setScrolled(!scrolled)}>
          <FiChevronRight />
        </div>
        {scrolled && (
          <div className="scroll-left" onClick={() => setScrolled(!scrolled)}>
            <FiChevronLeft />
          </div>
        )}
      </div>
    </div>
  );
};

const Capabilities = (props: any) => {
  const query = (props.q || "").toLocaleLowerCase();
  const capabilities = (props.capabilities || []).filter((p: any) => {
    const title = p.title || p.label || "";
    const body = p.body || p.label || "";
    return (
      !query ||
      title.toLocaleLowerCase().includes(query) ||
      body.toLocaleLowerCase().includes(query)
    );
  });
  if (capabilities.length === 0) return null;
  return (
    <div className="capabilities-wrapper">
      <div className={`capabilities ${props.className || ""}`}>
        <div className="capability">
          <div className="capability-icon">
            <VscAdd />
          </div>
          <div>
            <div className="capability-title">Create your own</div>
            <div className="capability-body"></div>
            Get Started |{" "}
            <a
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                props.docs("add new");
              }}
            >
              Docs
            </a>
          </div>
        </div>
        {capabilities.map((p: any) => (
          <Capability
            capability={p}
            pin={props.pin}
            docs={props.docs}
            nav={props.nav}
          />
        ))}
      </div>
    </div>
  );
};

const PLUGINS = {
  installed: [
    {
      title: ".NET",
      icon: "https://raw.githubusercontent.com/newrelic/newrelic-quickstarts/v0.101.0/quickstarts/dotnet/dotnet/logo.svg",
      body: "Learn more about .NET Framework, the importance of monitoring .NET, the ideal features of a .NET monitor, and the unique value of New Relic's .NET quickstart.",
    },
    {
      title: "Lacework",
      icon: "https://www.lacework.com/wp-content/uploads/2021/12/Lacework_Shield_RGB.png",
      body: "Integrate Lacework's security events into the New Relic platform",
      author: "Lacework, Inc",
    },
    {
      title: "Python",
      icon: "https://raw.githubusercontent.com/newrelic/newrelic-quickstarts/v0.101.0/quickstarts/python/python/logo.svg",
      body: "Alerts, event loop diagnostics, and multiple customizable dashboards to detect and resolve issues before they impact end-users.",
    },
    {
      title: "Linux",
      icon: "https://1000logos.net/wp-content/uploads/2017/03/LINUX-LOGO.png",
      body: "Use the New Relic Infrastructure agent to monitor Linux",
    },
    {
      title: "Kafka",
      icon: "https://svn.apache.org/repos/asf/kafka/site/logos/originals/png/ICON%20-%20White%20on%20Transparent.png",
      body: "Kafka monitoring helps track Kafka topics, number of brokers, messages per second, broker bytes, and consumer lag in real-time.",
    },
    {
      title: "CodeStream",
      icon: "https://plugins.jetbrains.com/files/12206/158570/icon/pluginIcon.svg",
      body: "View production telemetry and troubleshoot errors from your IDE.",
      author: "New Relic",
    },
  ],
  recommended: [
    {
      title: "Guided Install",
      icon: "https://www.clipartmax.com/png/full/252-2523577_logo-transparent-new-relic-logo-png.png",
      body: "The easiest way to start instrumenting your environment so that you can monitor it.",
      author: "New Relic",
    },
    {
      title: "CodeStream",
      icon: "https://plugins.jetbrains.com/files/12206/158570/icon/pluginIcon.svg",
      body: "View production telemetry and troubleshoot errors from your IDE.",
      author: "New Relic",
    },
    {
      title: "Node.js",
      icon: "https://raw.githubusercontent.com/newrelic/newrelic-quickstarts/v0.101.0/quickstarts/node-js/node-js/logo.svg",
      body: "Monitor Node.js including multiple high-value alerts and informative dashboards to help developers visualize essential metrics and act on potential issues quickly.",
      author: "New Relic",
    },
    {
      title: "Java",
      icon: "https://raw.githubusercontent.com/newrelic/newrelic-quickstarts/v0.101.0/quickstarts/java/adobe-cq/logo.svg",
      body: "Insight into application performance, improves uptime, and reduces latency. Monitoring is reported using metric time-slice and event data, and all results are displayed in easy-to-use, visual dashboards.",
      author: "New Relic",
    },
    {
      title: "MongoDB",
      icon: "https://th.bing.com/th/id/R.e02128ffde3fa9ddecf8a173a3f89260?rik=ISOzgojnaAOD6w&riu=http%3a%2f%2f1.bp.blogspot.com%2f-z0k4kdWf1D4%2fU2Nl-4GincI%2fAAAAAAAALs4%2fM058ExsalEY%2fs1600%2fmongodb.png&ehk=mUuc6w8PoO6%2bPUIoz0KOxZiuXspTFL%2bXujH%2f%2bV6cuUI%3d&risl=&pid=ImgRaw&r=0",
      body: "New Relic's MongoDB quickstart provides multiple customized dashboards including total commands, requests per second, and database size. Install the quickstart to better understand utilization of resources and monitor performance issues.",
      author: "New Relic",
    },
    {
      title: ".NET",
      icon: "https://raw.githubusercontent.com/newrelic/newrelic-quickstarts/v0.101.0/quickstarts/dotnet/dotnet/logo.svg",
      body: "Learn more about .NET Framework, the importance of monitoring .NET, the ideal features of a .NET monitor, and the unique value of New Relic's .NET quickstart.",
      author: "New Relic",
    },
  ],
  featured: [
    {
      title: "Trend Micro Cloud One",
      icon: "https://3.imimg.com/data3/DD/BY/MY-9447834/trend-micro-support-500x500.png",
      body: "New Relic’s integration with Trend Micro Cloud One - Conformity ingests cloud security posture management (CSPM) data from Conformity into New Relic in real-time.",
      author: "Trend Micro",
    },
    {
      title: "PHP",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png",
      body: "PHP server monitor agent helps app developers quickly identify and resolve errors, including slow responses, to enhance customer experiences.",
    },
    {
      title: "Lacework",
      icon: "https://www.lacework.com/wp-content/uploads/2021/12/Lacework_Shield_RGB.png",
      body: "Integrate Lacework's security events into the New Relic platform",
      author: "Lacework, Inc",
    },
    {
      title: "Linux",
      icon: "https://1000logos.net/wp-content/uploads/2017/03/LINUX-LOGO.png",
      body: "Use the New Relic Infrastructure agent to monitor Linux",
    },
    {
      title: "Python",
      icon: "https://raw.githubusercontent.com/newrelic/newrelic-quickstarts/v0.101.0/quickstarts/python/python/logo.svg",
      body: "Alerts, event loop diagnostics, and multiple customizable dashboards to detect and resolve issues before they impact end-users.",
    },
    {
      title: "Fastly CDN",
      icon: "https://raw.githubusercontent.com/newrelic/newrelic-quickstarts/v0.101.0/quickstarts/fastly/logo.png",
      body: "Analyze the health of your Fastly CDN POP footprint with both a dashboard and alerts.",
    },
  ],
  apm: [
    {
      title: "PHP",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png",
      body: "PHP server monitor agent helps app developers quickly identify and resolve errors, including slow responses, to enhance customer experiences.",
    },
    {
      title: ".NET",
      icon: "https://raw.githubusercontent.com/newrelic/newrelic-quickstarts/v0.101.0/quickstarts/dotnet/dotnet/logo.svg",
      body: "Learn more about .NET Framework, the importance of monitoring .NET, the ideal features of a .NET monitor, and the unique value of New Relic's .NET quickstart.",
    },
    {
      title: "Albo Pathpoint",
      icon: "https://nr3.nr-ext.net/artifact-index-production/66cbf464-0991-4204-8552-cc7c45155e86/det/66cbf464-0991-4204-8552-cc7c45155e86.png",
      body: "Pathpoint is an enterprise platform tracker that models business process health using New Relic telemetry as the foundational signal data.",
    },
    {
      title: "Akka",
      icon: "https://raw.githubusercontent.com/newrelic/newrelic-quickstarts/v0.101.0/quickstarts/java/akka/logo.svg",
      body: "Monitor Akka with New Relic's Java agent.",
    },
    {
      title: "Apigee API Distributed Tracing",
      icon: "https://raw.githubusercontent.com/newrelic/newrelic-quickstarts/v0.101.0/quickstarts/gcp/apigee-api/logo.svg",
      body: "Monitor Apigee API Flows with New Relic's Trace API.",
    },
    {
      title: "ActiveRecord",
      icon: "https://raw.githubusercontent.com/newrelic/newrelic-quickstarts/v0.101.0/quickstarts/ruby/activerecord/logo.svg",
      body: "Monitor ActiveRecord with New Relic's Ruby agent.",
    },
    {
      title: "F5",
      icon: "https://raw.githubusercontent.com/newrelic/newrelic-quickstarts/v0.101.0/quickstarts/f5/logo.svg",
      body: "Monitor your F5 BIG-IP with New Relic.",
    },
  ],
  recent: [
    {
      title: "Email Notifications",
      icon: "https://raw.githubusercontent.com/newrelic/newrelic-quickstarts/v0.101.0/quickstarts/notification-channels/email-notifications/logo.png",
      body: "Send your New Relic alerts via email.",
      author: "Matan Moser and Ismail Azam",
    },
    {
      title: "Event API",
      icon: "https://raw.githubusercontent.com/newrelic/newrelic-quickstarts/v0.101.0/quickstarts/apis/event/logo.png",
      body: "The New Relic Event API is one way to report custom events to New Relic. The Event API lets you send custom event data to your New Relic account with a POST command. These events are then queryable and chartable using NRQL.",
    },
    {
      title: "F5",
      icon: "https://raw.githubusercontent.com/newrelic/newrelic-quickstarts/v0.101.0/quickstarts/f5/logo.svg",
      body: "Monitor your F5 BIG-IP with New Relic.",
    },
    {
      title: "facepy",
      icon: "https://raw.githubusercontent.com/newrelic/newrelic-quickstarts/v0.101.0/quickstarts/python/facepy/logo.svg",
      body: "Monitor facepy with New Relic's Python agent.",
    },
    {
      title: "Falcon",
      icon: "https://raw.githubusercontent.com/newrelic/newrelic-quickstarts/v0.101.0/quickstarts/python/falcon/logo.svg",
      body: "Monitor Falcon with New Relic's Python agent.",
    },
    {
      title: "Fluent Bit plugin for Logs",
      icon: "https://raw.githubusercontent.com/newrelic/newrelic-quickstarts/v0.101.0/quickstarts/fluent-bit-plugin-for-logs/logo.svg",
      body: "Open source and multi-platform Log Processor and Forwarder which allows you to collect data/logs from different sources.",
    },
  ],
  trending: [
    {
      title: "Amazon CloudWatch Metric Streams",
      icon: "https://raw.githubusercontent.com/newrelic/newrelic-quickstarts/v0.101.0/quickstarts/aws/amazon-cloudwatch-metric-streams/logo.svg",
      body: "Use Amazon CloudWatch to monitor your AWS services with New Relic.",
    },
    {
      title: "AWS",
      icon: "https://raw.githubusercontent.com/newrelic/newrelic-quickstarts/v0.101.0/quickstarts/aws/amazon-web-services/logo.svg",
      body: "Enable integrations and get complete visibility into your infrastructure.",
    },
    {
      title: "AWS NLB/ALB",
      icon: "https://raw.githubusercontent.com/newrelic/newrelic-quickstarts/v0.101.0/quickstarts/aws/aws-nlb-alb/logo.svg",
      body: "Monitor AWS NLB/ALB by connecting AWS to New Relic.",
    },
    {
      title: "Azure App Service",
      icon: "https://raw.githubusercontent.com/newrelic/newrelic-quickstarts/v0.101.0/quickstarts/azure/azure-app-service/logo.svg",
      body: "Monitor Azure App Service by connecting Azure to New Relic.",
    },
    {
      title: "Azure Front Door",
      icon: "https://raw.githubusercontent.com/newrelic/newrelic-quickstarts/v0.101.0/quickstarts/azure/azure-front-door/logo.svg",
      body: "Monitor Azure Front Door by connecting Azure to New Relic.",
    },
    {
      title: "BancoChile Pathpoint",
      icon: "https://nr3.nr-ext.net/artifact-index-production/49566445-b583-4794-b46d-81ff3cdb1c5b/1.0.2/49566445-b583-4794-b46d-81ff3cdb1c5b.png",
      body: "Pathpoint is an enterprise platform tracker that models system health in relation to actual user-impacting business stages.",
    },
  ],
};

const CATEGORIES = [
  { label: "All", isDefault: true },
  { label: "Application monitoring" },
  { label: "Infrastructure & OS" },
  { label: "Browser & mobile" },
  { label: "Simulate Traffic" },
  { label: "Logging" },
  { label: "Kubernetes & Containers" },
  { label: "Amazon Web Services" },
  { label: "Azure" },
  { label: "Google Cloud Platform" },
  { label: "Open source monitoring" },
  { label: "Machine learning ops" },
  { label: "Notifications" },
];

const ENTITY_TYPES = [
  { label: "All", subdir: "/entities/all", noExact: true, icon: <MdGridView /> },
  { label: "-Your System", icon: <VscChevronDown />},
  { label: "APM", icon: <VscGraphLine /> },
  { label: "OpenTelemetry", icon: <VscGraphLine /> },
  { label: "Hosts", icon: <VscServer /> },
  { label: "Containers", icon: <VscServer /> },
  { label: "Mobile", icon: <VscDeviceMobile /> },
  { label: "Browser", icon: <VscBrowser /> },
  { label: "-Other entities", icon: <VscChevronDown /> },
  { label: "Fastly datacenters", icon: <VscBrowser /> },
  { label: "Redis clusters", icon: <VscBrowser /> },
  { label: "-Synthetics", icon: <VscChevronDown /> },
  { label: "Private locations", icon: <VscBrowser /> },
  { label: "Secure credentials", icon: <VscBrowser /> },
  { label: "-Kubernetes", icon: <VscChevronDown /> },
  { label: "Kubernetes API servers", icon: <VscBrowser /> },
  { label: "Kubernetes clusters", icon: <VscBrowser /> },
  { label: "Kubernetes deployments", icon: <VscBrowser /> },
  { label: "Kubernetes pods", icon: <VscBrowser /> },
  { label: "Kubernetes statefulsets", icon: <VscBrowser /> },
  // { label: "Azure" },
  // { label: "Google Cloud Platform" },
  // { label: "Open source monitoring" },
  // { label: "Machine learning ops" },
  // { label: "Notifications" },
];

const Category = (props: any) => {
  return (
    <div className="category" onClick={props.onClick}>
      {props.children}
    </div>
  );
};

const Tabs = (props: any) => {
  return <div className="tabs">{props.children}</div>;
};

const Tab = (props: any) => {
  return (
    <div
      onClick={props.onClick}
      className={`tab ${props.selected ? "selected" : ""}`}
    >
      {props.title}
    </div>
  );
};

const DetectionConfiguration = (props: any) => {
  const [selected, setSelected] = React.useState(0);
  return (
    <Content>
      <Title className="compact">Detection Configuration</Title>
      <Tabs>
        <Tab
          onClick={() => setSelected(0)}
          active={selected == 0}
          title="Anomaly detection"
        ></Tab>
        <Tab
          onClick={() => setSelected(1)}
          active={selected == 1}
          title="Alert conditions"
        ></Tab>
        <Tab
          onClick={() => setSelected(2)}
          active={selected == 2}
          title="Alert policies"
        ></Tab>
      </Tabs>
    </Content>
  );
};

const GettingStarted = (props: any) => {
  return (
    <Content>
      <Title className="compact">Getting Started</Title>
      <div className="getting-started">
        <Step title="Add your data" number="1">
          Connect your data to New Relic and gain insights in 5 minutes.
        </Step>
        <Step title="Explore your data" number="2">
          Traverse your entire stack in one place.
        </Step>
        <Step title="Monitor workflows" number="3">
          Detect outages and poor performance before your users notice.
        </Step>
        <Step title="Configure an alert" number="4">
          Configure an alert and we'll tell you when to worry.
        </Step>
        <Step title="Query your data" number="5">
          Write your first query in our powerful New Relic Query Language.
        </Step>
        <Step title="Set up a dashboard" number="6">
          Create and share dashboards that matter to you and your team.
        </Step>
        <Step title="Invite your team" number="7">
          Create and share dashboards that matter to you and your team.
        </Step>
      </div>
    </Content>
  );
};

const AddData = (props: any) => {
  const [hide, setHide] = React.useState(false);
  const [query, setQuery] = React.useState("");

  const location = useLocation();

  const [pathname, setPathname] = React.useState<string>(location.pathname);

  React.useEffect(() => {
    setQuery(location.pathname.split("add-data/")[1]);
  }, [location.pathname]);

  return (
    <Content className="has-third-nav">
      <Title className="compact">Add Your Data to New Relic</Title>
      <Search
        autoFocus
        placeholder="Search for any environment or data source"
        value={query}
        onChange={(q: string) => setQuery(q)}
      />
      <ThirdNav title="Data Types" items={CATEGORIES} subdir="/add-data/" thirdNavState={props.thirdNavState} setThirdNavState={props.setThirdNavState}/>

      {/* <Plugins
        title="Installed"
        className="installed"
        plugins={PLUGINS.installed}
        q={query}
      /> */}
      <Plugins
        pin={props.pin}
        title="Recommended"
        plugins={PLUGINS.recommended}
        q={query}
      />
      <Plugins
        pin={props.pin}
        title="Featured"
        plugins={PLUGINS.featured}
        q={query}
      />
      <Plugins
        pin={props.pin}
        title="Trending"
        plugins={PLUGINS.trending}
        q={query}
      />
      <Plugins
        pin={props.pin}
        title="Recently Added"
        plugins={PLUGINS.recent}
        q={query}
      />
      <Plugins pin={props.pin} title="APM" plugins={PLUGINS.apm} q={query} />
      <Plugins pin={props.pin} title="Infrastructure &amp; OS" q={query} />
      <Plugins pin={props.pin} title="Browser &amp; Mobile" q={query} />
      <br />
      <br />
      <br />
    </Content>
  );
};

const AllCapabilities = (props: any) => {
  const [query, setQuery] = React.useState("");
  return (
    <Content>
      <Title className="compact">All Capabilities</Title>
      <Search
        autoFocus
        placeholder="Search capabilities"
        value={query}
        onChange={(q: string) => setQuery(q)}
      />
      <Capabilities
        title="Recommended"
        capabilities={CAPABILITIES}
        q={query}
        pin={props.pin}
        docs={props.docs}
        nav={props.nav}
      />
      <br />
      <br />
      <br />
      <br />
    </Content>
  );
};
{
  /* <div className="filters">
<div className="group">
  <button
    className={view === "all" ? "selected" : ""}
    onClick={() => setView("all")}
  >
    Health
  </button>
  <button
    className={view === "following" ? "selected" : ""}
    onClick={() => setView("following")}
  >
    Service Levels (Beta)
  </button>
  <button
    className={view === "unread" ? "selected" : ""}
    onClick={() => setView("unread")}
  >
    Activity
  </button>
  <button
    className={view === "open" ? "selected" : ""}
    onClick={() => setView("open")}
  >
    Owner
  </button>
  <button
    className={view === "closed" ? "selected" : ""}
    onClick={() => setView("closed")}
  >
    Map (Beta)
  </button>
</div>
</div> */
}

export const OnOff = (props: any) => {
  const [state, setState] = React.useState("off");
  return (
    <div
      className={`on-off ${state}`}
      onClick={() => {
        const newState = state === "on" ? "off" : "on";
        setState(newState);
        if (props.onChange) props.onChange(newState);
      }}
    >
      <span className="knob" />
    </div>
  );
};

const Timepicker = (props: any) => {
  const [timeOpen, setTimeOpen] = React.useState(false);
  return (
    <button
      className={`rounded secondary ${timeOpen ? "active" : ""}`}
      style={{ margin: "0 0 0 10px" }}
      onClick={() => setTimeOpen(!timeOpen)}
    >
      <BsClock style={{ marginLeft: "3px" }} />
      <label style={{ verticalAlign: "1px", padding: "0 5px" }}>
        Since 30 minutes ago
      </label>
      <VscChevronDown />
      {timeOpen && (
        <div className="menu" style={{ width: "100%" }}>
          <ul>
            <hr />
            <li>30 minutes</li>
            <li>60 minutes</li>
            <hr />
            <li>3 hours</li>
            <li>6 hours</li>
            <li>12 hours</li>
            <li>24 hours</li>
            <hr />
            <li>3 days</li>
            <li>7 days</li>
          </ul>
        </div>
      )}
    </button>
  );
};

const Explorer = (props: any) => {
  //   const [view, setTheView] = React.useState<string>("list");
  const history = useHistory();
  const location = useLocation();
  const [a, b, filter = "all", entity, view] = location.pathname.split("/");
  // console.warn("PATH IS: " + location.pathname.split("/"));

  const subtitles = {
    apm: "APM",
    opentelemetry: "Open Telemetry",
    hosts: "Hosts",
    containers: "Containers",
    mobile: "Mobile",
    browser: "Browser",
    synthetics: "Synthetics"
  } as any;
  const subtitle = props.subtitle || subtitles[filter] || "All Entities";

  const setView = (value: string) => {
    // setTheView(view);
    if (value === "list" || value === "navigator" || value === "lookout")
      history.push("/entities/" + (filter || "all") + "/" + (entity || "") + "/" + value);
    else
      history.push("/entities/" + (filter || "all") + "/" + (value || "") + "/" + (view || "list"));
  };

  if (
    subtitle === "All Entities" ||
    view === "list" ||
    view === "navigator" ||
    view === "lookout" ||
    !view
  ) {
    return (
      <Content className={`has-third-nav${entity ? " has-fourth-nav" : ""}`}>
        <ThirdNav title="Entity Types" items={ENTITY_TYPES} subdir="/entities/" thirdNavState={props.thirdNavState} setThirdNavState={props.setThirdNavState}/>
        {/* <ThirdNav items={NAV_EXPLORER} subdir="/explorer/" /> */}
        <Title
          className="compactX"
          buttonsX={[
            <button className=" round">Save view</button>,
          ]}
        >
          {subtitle}
        </Title>
        <div
          style={{
            display: "flex",
            flex: 1,
            //   background: "var(--bg-1)",
            //   padding: "10px",
            borderRadius: "4px",
            marginBottom: "15px",
          }}
        >
          <Search
            icon="filter"
            className="flex-grow"
            placeholder="Filter by name, type, tags... (e.g. entityType = Host)"
          />
          <div className="filters" style={{ marginLeft: "10px", flexShrink: 0 }}>
            <div className="group">
              <button
                className={(!view || view === "list") ? "selected" : ""}
                onClick={() => setView("list")}
              >
                <VscListUnordered />
                List
              </button>
              <button
                className={view === "navigator" ? "selected" : ""}
                onClick={() => setView("navigator")}
              >
                <BsHexagon />
                Navigator
              </button>
              <button
                className={view === "lookout" ? "selected" : ""}
                onClick={() => setView("lookout")}
              >
                <MdOutlineBubbleChart />
                Lookout
              </button>
            </div>
          </div>
          <button
            className="rounded secondary"
            style={{ margin: 0, display: "none" }}
            title="Disabled. Enter a filter to save."
          >
            Save as view
          </button>
          <button className="rounded flex-right" style={{ margin: "0 0 0 0", flexShrink: 0  }}>
            Save view
          </button>
        </div>
        {view === "navigator" && (
          <div style={{ display: "flex", marginBottom: "15px" }}>
            <div>
              Group reporting entities by
              <button
                className="rounded secondary compact"
                style={{ margin: "0 5px" }}
              >
                <label style={{ verticalAlign: "1px", padding: "0 5px" }}>
                  language
                </label>
                <VscChevronDown />
              </button>
              and sort by
              <button
                className="rounded secondary compact"
                style={{ margin: "0 5px" }}
              >
                <label style={{ verticalAlign: "1px", padding: "0 5px" }}>
                  health
                </label>
                <VscChevronDown />
              </button>
            </div>
            <div style={{ marginLeft: "auto", whiteSpace: "nowrap" }}>
              Include data <OnOff /> Show only alerting entities <OnOff />{" "}
              <VscQuestion
                style={{ verticalAlign: "-6px", fontSize: "20px" }}
              />
            </div>
          </div>
        )}
        {(view === "list" || !view) && (
          <EntityList setView={setView} filter={filter} entity={entity}/>
        )}
        {view === "navigator" && <Navigator />}
      </Content>
    );
  } else {
    return (
      <Content>
        {/* <ThirdNav items={NAV_EXPLORER} subdir="/explorer/" /> */}

        {/*}
        <div className="two-col">
          <div className="left-col">
            <div className="nav-button-group">
              <button className="rounded" style={{ marginRight: "20px" }}>
                <VscArrowLeft />
              </button>
              <div className="two-buttons">
                <button className="rounded left">
                  <VscChevronUp />
                </button>
                <button className="rounded right">
                  <VscChevronDown />
                </button>
              </div>
            </div>
            <div style={{ height: "100%", minHeight: "100vh" }}>foo</div>
          </div>
          <div className="right-col">
    */}
        <div>
          <Title
            className="compactX"
            buttonsX={[
              <button className="primary round">Create a workload</button>,
            ]}
          >
            <div className="breadcrumb">
              <NavLink to="/entities">All Entities</NavLink> &gt;
              <NavLink to="/apm">APM</NavLink>
            </div>
            <Square color="green" />
            {view}
          </Title>
          <div
            style={{
              display: "flex",
              flex: 1,
              //   background: "var(--bg-1)",
              //   padding: "10px",
              borderRadius: "4px",
              marginBottom: "15px",
            }}
          >
            <div>
              {" "}
              Transaction type
              <button
                className="rounded secondary compact"
                style={{ margin: "0 5px" }}
              >
                <label style={{ verticalAlign: "1px", padding: "0 5px" }}>
                  Web
                </label>
                <VscChevronDown />
              </button>
              Compare with
              <button
                className="rounded secondary compact"
                style={{ margin: "0 5px" }}
              >
                <label style={{ verticalAlign: "1px", padding: "0 5px" }}>
                  none
                </label>
                <VscChevronDown />
              </button>
              Instances
              <button
                className="rounded secondary compact"
                style={{ margin: "0 5px" }}
              >
                <label style={{ verticalAlign: "1px", padding: "0 5px" }}>
                  All
                </label>
                <VscChevronDown />
              </button>
            </div>
          </div>
        </div>
        <div className="three-col">
          <div className="left-col">
            <div className="box">
              <ul>
                <li>Summary</li>
                <li>Distributed tracing</li>
                <li>Service Map</li>
                <li>Dependencies</li>
              </ul>
            </div>
          </div>
          <div className="center-col">
            <div className="box"></div>
          </div>
          <div className="right-col">
            <div className="box"></div>
          </div>
        </div>
      </Content>
    );
  }
};

const Star = (props: any) => {
  return <VscStarEmpty />;
};

const EntityDetail = (props: any) => {
  return (<div className="detail-pane">
        <div className="detail-body">
          <div className="close-button" onClick={() => props.handleClick("")}><VscClose /></div>
          <div className="entity-title">{props.entity}</div>
        </div>
       </div>);
};

const EntityList = (props: any) => {
  const handleClick = (view: string) => props.setView(view);
  const filter = props.filter || "all";
  const entity = props.entity;
  return (
    <div style={{display: "flex"}}>
    <div>
      {(filter === "apm" || filter === "all") && <APMEntities noTitle={filter !== "all"} handleClick={handleClick} entity={entity} />}
      {(filter === "opentelemetry" || filter === "all") && <OpenTelemetryEntities noTitle={filter !== "all"} handleClick={handleClick} entity={entity} />}
      {(filter === "mobile" || filter === "all") && <MobileEntities noTitle={filter !== "all"} handleClick={handleClick} entity={entity} />}
      {(filter === "hosts" || filter === "all") && <HostsEntities noTitle={filter !== "all"} handleClick={handleClick} entity={entity} />}
      <br />
      <br />
      <br />
    </div>
      {entity && <EntityDetail handleClick={handleClick} filter={props.filter} entity={props.entity} />}
    </div>
  );
};

const DashboardsTable = (props: any) => {
  const handleClick = () => props.setView("dashboard");
  return (
    <table className="messages dashboards">
      <thead>
        <tr>
          <td></td>
          <td>Name</td>
          <td>Account</td>
          <td>Created By</td>
          <td>Last Edited</td>
          <td>Created On</td>
        </tr>
      </thead>
      <tbody>
        <tr onClick={handleClick}>
          <td style={{ color: "yellow" }}>
            <VscStarFull />
          </td>
          <td>Alerts Filter Operations Dashboard (Production) copy</td>
          <td>New Relic</td>
          <td>-</td>
          <td>-</td>
          <td>36.14ms</td>
        </tr>
        <tr onClick={handleClick}>
          <td style={{ color: "yellow" }}>
            <VscStarFull />
          </td>
          <td>.NET Agent (based on UI views)</td>
          <td>New Relic</td>
          <td>-</td>
          <td>-</td>
          <td>36.14ms</td>
        </tr>
        <tr onClick={handleClick}>
          <td style={{ position: "relative" }}>
            <VscStarEmpty />
          </td>
          <td>Adobe User Engagement Export</td>
          <td>New Relic</td>
          <td>-</td>
          <td>-</td>
          <td>36.14ms</td>
        </tr>
        <tr onClick={handleClick}>
          <td>
            <VscStarEmpty />
          </td>
          <td>04162021-DEMPLA-PagSeguro Perf Testing</td>
          <td>New Relic</td>
          <td>-</td>
          <td>-</td>
          <td>36.14ms</td>
        </tr>
        <tr onClick={handleClick}>
          <td>
            <VscStarEmpty />
          </td>
          <td>[KPT] Kafka Cluster (stg-itchy-salt-kafka)</td>
          <td>New Relic</td>
          <td>-</td>
          <td>-</td>
          <td>36.14ms</td>
        </tr>
      </tbody>
    </table>
  );
};

const Navigator = (props: any) => {
  const [showDetails, setShowDetails] = React.useState(false);
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
      }}
    >
      <div
        style={{
          background: "var(--bg-3)",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        onClick={() => setShowDetails(!showDetails)}
      >
        <img src="https://i.imgur.com/XO4ZQac.png" style={{ width: "100%" }} />
      </div>
      {showDetails && (
        <div
          style={{
            flexBasis: "500px",
            minHeight: "100vh",
            borderRadius: "4px",
            background: "var(--bg-3)",
          }}
        >
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      )}
    </div>
  );
};

const ErrorsInbox = (props: any) => {
  return (
    <Content>
      <Banner />
      <Title>Errors Inbox</Title>
      <div className="placeholder">Errors Inbox goes here</div>
    </Content>
  );
};

const Me = (props: any) => {
  return (
    <Content>
      <Title>Peter Pezaris</Title>
      <div onClick={props.toggleTheme}>Theme</div>
      <br />
      {/* Show NRQL Console{" "}
      <OnOff onChange={(value: any) => props.setConsole(value)} /> */}
    </Content>
  );
};

const Help = (props: any) => {
  return (
    <Content>
      <Banner />
      <Title>Help</Title>
      <div className="placeholder">Help goes here</div>
    </Content>
  );
};

const APM = (props: any) => {
  const history = useHistory();
  const location = useLocation();
  const [a, b, entity] = location.pathname.split("/");
  const handleClick = (value: string) => {
    // setTheView(view);
      history.push("/apm/" + (value || ""));
  };
  return (
    <Content>
      <Title>APM Services</Title>
      <Search
        icon="filter"
        className="flex-grow"
        placeholder="Filter by name, type, tags... (e.g. entityType = Host)"
      />
      <div style={{ height: "10px" }} />
    <div style={{display: "flex"}}>
    <div>
      <APMEntities noTitle handleClick={handleClick} entity={entity} />
      </div>
      {entity && <EntityDetail handleClick={handleClick} filter={""} entity={entity} />}
      </div>
    </Content>
  );
};

const Infrastructure = (props: any) => {
  return (
    <Content>
      <Title>Infrastructure</Title>
      <Tabgroup items={NAV_INFRASTRUCTURE} subdir="/infrastructure/" />
      <HostsEntities noTitle />
    </Content>
  );
};

const Tabgroup = (props: any) => {
  return (
    <ul className="tabs">
      {props.items.map((item: any) => (
        <NavItem noEllipsis className="tab" item={item} subdir={props.subdir} />
      ))}
    </ul>
  );
};

const Synthetics = (props: any) => {
  const [view, setView] = React.useState<string>("list");
  return (
    <Content>
      <Tabgroup items={NAV_SYNTHETICS} subdir="/synthetics/" />
      <Title>Synthetics</Title>
      <div
        style={{
          display: "flex",
          flex: 1,
          //   background: "var(--bg-1)",
          //   padding: "10px",
          borderRadius: "4px",
          marginBottom: "15px",
        }}
      >
        <Search
          icon="filter"
          className="flex-grow"
          placeholder="Filter by name, type, tags... (e.g. entityType = Host)"
        />
        <div className="filters" style={{ marginLeft: "10px" }}>
          <div className="group">
            <button
              className={view === "list" ? "selected" : ""}
              onClick={() => setView("list")}
            >
              <VscListUnordered />
              List
            </button>
            <button
              className={view === "lookout" ? "selected" : ""}
              onClick={() => setView("lookout")}
            >
              <MdOutlineBubbleChart />
              Lookout
            </button>
          </div>
          <button className="primary">Create monitor</button>
        </div>
      </div>
      <div className="placeholder">Synthetics goes here</div>
    </Content>
  );
};

const Browser = (props: any) => {
  return (
    <Content>
      <Title>Browser</Title>
      <Search
        icon="filter"
        className="flex-grow"
        placeholder="Filter by name, type, tags... (e.g. entityType = Host)"
      />
      <div style={{ height: "10px" }} />
      <HostsEntities noTitle />
    </Content>
  );
};

const Mobile = (props: any) => {
  return (
    <Content>
      <Title>Mobile</Title>
      <Search
        icon="filter"
        className="flex-grow"
        placeholder="Filter by name, type, tags... (e.g. entityType = Host)"
      />
      <div style={{ height: "10px" }} />
      <MobileEntities noTitle />
    </Content>
  );
  // <img src="https://i.imgur.com/FVcAiJC.png" style={{ width: "100%" }} />
};

const NAV_ALERTS = [
  { label: "Overview", isDefault: true, subdir: "/ai--alerts" },
  { label: "Issues" },
  { label: "Incidents" },
  { label: "Events" },
  { label: "Policies" },
  { label: "Notifications" },
  { label: "Muting" },
  { label: "Settings" },
  { label: "Decisions" },
  { label: "Sources" },
  { label: "Destinations" },
  { label: "Pathways" },
  //   { label: "System settings" },
  { label: "Workflows" },
];

const Alerts = (props: any) => {
  return (
    <Content>
      <Title>Alerts &amp; AI</Title>
      <Tabgroup items={NAV_ALERTS} subdir="/alerts--ai/" />
      <div className="placeholder">Alerts &amp; AI goes here</div>
    </Content>
  );
  // <img src="https://i.imgur.com/mIZAU3v.png" style={{ width: "100%" }} />
};

const Logs = (props: any) => {
  return (
    <Content>
      {/* <ThirdNav items={NAV_LOGS} subdir="/logs/" /> */}
      <Title>Logs</Title>
      <div className="placeholder">Logs goes here</div>
    </Content>
  );
  // <img src="https://i.imgur.com/g0St7AZ.png" style={{ width: "100%" }} />
};

const BrowseData = (props: any) => {
  return (
    <Content>
      {/* <ThirdNav items={NAV_BROWSE} subdir="/browse-data/" /> */}
      <Title>Browse Data</Title>
      <div className="placeholder">Browse data goes here</div>
    </Content>
  );
  // <img src="https://i.imgur.com/QxHws6n.png" style={{ width: "100%" }} />
};

const Banner = (props: any) => {
  const [closed, setClosed] = React.useState(false);
  if (closed) return null;
  return (
    <div className="banner">
      <div className="left">
        <b>New Relic CodeStream</b> Debug prod and discuss code straight from
        your IDE.
      </div>
      <div className="right">
        <button>Get started</button>
        <span style={{ verticalAlign: "-2px", cursor: "pointer" }}>
          <VscChromeClose onClick={() => setClosed(true)} />
        </span>
      </div>
    </div>
  );
};

const Breadcrumb = (props: any) => {
  const { item } = props;
  const to = item.isDefault
    ? props.subdir
    : (props.subdir || "/") +
      (item.url ||
        item.label
          .toLocaleLowerCase()
          .replace(" ", "-")
          .replace(" ", "-")
          .replace("&", ""));
  return <NavLink to={to}>{props.label}</NavLink>;
};
const Dashboards = (props: any) => {
  const [view, setTheView] = React.useState("list");
  //   const history = useHistory();
  const setView = (view: string) => {
    setTheView(view);
  };
  if (view === "dashboard") {
    return (
      <Content>
        {/* <ThirdNav items={NAV_DASHBOARD} subdir="/dashboards/" /> */}
        {/* <Breadcrumb to={"dashboards"}>Dashboards</Breadcrumb> */}
        <Title
          buttons={
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className="rounded-button-group">
                <button className="rounded secondary">
                  <CgScreen />
                </button>
                <button className="rounded secondary">
                  <VscCode />
                </button>
                <button className="rounded secondary">
                  <CgSoftwareDownload />
                </button>
                <button className="rounded primary">
                  <VscAdd />
                </button>
              </div>
            </div>
          }
        >
          Adobe User Engagement Export
        </Title>
        <img src="https://i.imgur.com/nQhZTwi.png" style={{ width: "100%" }} />
      </Content>
    );
  } else {
    return (
      <Content>
        {/* <ThirdNav items={NAV_DASHBOARD} subdir="/dashboards/" /> */}
        <Title>Dashboards</Title>
        <div
          style={{
            margin: "-5px 0 15px 0",
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Search
            icon="filter"
            placeholder="Filter by name, type,tags... (e.g. entityType = Host)"
          />
          <button className="rounded secondary">
            <label>
              <span
                style={{
                  transform: "rotate(90deg)",
                  width: "1em",
                  height: "1em",
                }}
              >
                <CgSoftwareDownload />
              </span>
              Import dashboard
            </label>
          </button>
          <button className="rounded primary">
            <label>
              <VscAdd /> Create a dashboard
            </label>
          </button>
        </div>
        <DashboardsTable setView={setView} />
      </Content>
    );
  }
};

export const Badge = (props: any) => {
  return (
    <div className={"badge " + (props.className || "")}>{props.children}</div>
  );
};

const Slash = (props: any) => {
  return <div className="keybinding">/</div>;
};

const Keybinding = (props: any) => {
  return <div className="keybinding">{props.children}</div>;
};

const NAV_BROWSE = [
  { label: "Events", isDefault: true },
  { label: "Metrics" },
  { label: "Logs" },
  { label: "Traces" },
];

const NAV_DASHBOARD: any = [
  // { label: "All", icon: <VscFeedback />, isDefault: true },
  // { label: "Last", icon: <MdOutlineWbSunny /> },
  // { label: "Favorites", icon: <VscQuestion /> },
  // { label: "Saved", icon: <FiUserPlus /> },
];

const NAV_MORE = [
  { label: "AWS Lamba Setup" },
  { label: "Key Transactions" },
  { label: "Kubernetes" },
  { label: "Legacy custom dashboards" },
  { label: "Lookout" },
  {
    label: "Manage Insights data",
    labelDiv: (
      <span>
        Manage Insights data&nbsp;
        <span
          style={{
            display: "inline-block",
            color: "var(--green-6)",
            transform: "translateY(-8px)",
            fontSize: "10px",
          }}
        >
          new
        </span>
      </span>
    ),
  },
  { label: "Network" },
  { label: "New Relic Edge" },
  { label: "Plugins" },
  { label: "Serverless" },
  { label: "Service Levels" },
  { label: "Service Maps" },
  { label: "Traces" },
  { label: "Workload views" },
];

const NAV_INBOX = [
  { label: "Issue Feed" },
  { label: "Errors Inbox", badge: <Badge>1</Badge> },
  { label: "Messages", badge: <Badge>2</Badge> },
  { label: "Deviations" },
  { label: "Alerts classic" },
];

const NAV_FEEDBACK = [
  {
    label: "Rate your experience",
    icon: <BsStar />,
    onClick: () => {
      /* @ts-ignore */
      window.Usersnap.logEvent("rate_experience");
    },
  },
  {
    label: "Feature request",
    icon: <VscComment />,
    onClick: () => {
      /* @ts-ignore */
      window.Usersnap.logEvent("feature_request");
    },
  },
  {
    label: "Report a bug",
    icon: <VscBug />,
    onClick: () => {
      /* @ts-ignore */
      window.Usersnap.logEvent("report_bug");
    },
  },
];

const NAV_EXPLORER = [
  { label: "Entities", icon: <VscFeedback />, isDefault: true },
  { label: "Health", icon: <MdOutlineWbSunny /> },
  { label: "Metrics", icon: <VscQuestion /> },
  { label: "Events", icon: <FiUserPlus /> },
  { label: "Logs", icon: <FiUserPlus /> },
  { label: "Traces", icon: <FiUserPlus /> },
];

const NAV_SYNTHETICS = [
  { label: "Monitors", isDefault: true },
  { label: "SLA report" },
  { label: "Private locations" },
  { label: "Monitor downtime" },
  { label: "Secure credentials" },
  { label: "Location status" },
  { label: "Upgrade monitors" },
];
const NAV_APPLICATIONS = [
  { label: "APM Services", isDefault: true },
  { label: "Browser" },
  { label: "Mobile" },
  { label: "Synthetics" },
  { label: "Serverless" },
  { label: "ML Model Monitoring" },
] as any[];

const NAV_INFRASTRUCTURE = [
  { label: "Hosts", icon: <VscServer />, isDefault: true, subdir: "/infrastructure" },
  { label: "Containers", icon: <VscServer /> },
  { label: "Kubernetes", icon: <VscServer /> },
  { label: "NPM", icon: <VscServer /> },
  { label: "Cloud Services", icon: <VscServer /> },
  { label: "Third-party services", icon: <VscServer /> },
  { label: "Infrastructure classic", icon: <VscServer /> },
];

const NAV_LOGS = [
  // { label: "All", icon: <VscListFlat /> },
  { label: "Attributes", icon: <VscListFlat /> },
  { label: "Patterns", icon: <VscListFlat /> },
  { label: "Livetail", icon: <VscListFlat /> },
  { label: "Query", icon: <VscListFlat /> },
  { label: "Drop Filters", icon: <VscListFlat /> },
  { label: "Parsing", icon: <VscListFlat /> },
  { label: "Data partitions", icon: <VscListFlat /> },
  { label: "Create alert condition", icon: <VscListFlat /> },
  { label: "Create drop filter", icon: <VscListFlat /> },
] as any[];

const NAV_CONFIGURE = [
  { label: "Add Data", icon: <VscAdd />, isDefault: true },
  { label: "Detection Configuration", icon: <MdOutlineWbSunny /> },
  { label: "Issue Configuration", icon: <VscFeedback /> },
  { label: "Errors Configuration", icon: <FiUserPlus /> },
  { label: "API Keys", icon: <FiUserPlus /> },
  { label: "Integrations", icon: <FiUserPlus /> },
  { label: "Manage Insights Data", icon: <FiUserPlus /> },
  { label: "Administration", icon: <FiUserPlus /> },
];

const NAV_SEARCH: any = [];
const NAV_FAVORITES = [
  {
    className: "favorite-entities",
    icon: <VscStarFull />,
    label: "foodme",
    labelDiv: (
      <div>
        <Square color="green" />
        FoodMe
      </div>
    ),
    extra: <div className="nav-extra">entity</div>,
  },
  {
    className: "favorite-entities",
    icon: <VscStarFull />,
    label: "kafka-admin",
    labelDiv: (
      <div>
        <Square color="green" />
        Kafka-admin (perf)
      </div>
    ),
    extra: <div className="nav-extra">entity</div>,
  },
  {
    className: "favorite-entities",
    icon: <VscStarFull />,
    label: "kafka-2",
    labelDiv: (
      <div>
        <Square color="red" />
        Kafka-admin (stg-deep-tree)
      </div>
    ),
    extra: <div className="nav-extra">entity</div>,
  },
  {
    className: "favorite-entities",
    icon: <VscStarFull />,
    label: "kafka-3",
    labelDiv: (
      <div>
        <Square color="gray" />
        kafka-admin (stg-showy-brain)
      </div>
    ),
    extra: <div className="nav-extra">entity</div>,
  },
  {
    className: "favorite-entities",
    icon: <VscStarFull />,
    label: "Transactions overview",
    extra: <div className="nav-extra">dashboard</div>,
  },
  {
    className: "favorite-entities",
    icon: <VscStarFull />,
    label: "Insights Home",
    extra: <div className="nav-extra">dashboard</div>,
  },
  {
    className: "favorite-entities",
    icon: <VscStarFull />,
    label: "Alerts Filter Operations Dashboard",
    extra: <div className="nav-extra">dashboard</div>,
  },
  {
    className: "favorite-entities",
    icon: <VscStarFull />,
    label: "Customer Product Usage Tracking",
    extra: <div className="nav-extra">dashboard</div>,
  },
  { label: "-Recent" },
  {
    className: "favorite-entities not-yellow",
    icon: <VscStarFull />,
    label: "kafka-4",
    labelDiv: (
      <div>
        <Square color="green" />
        Kafka-admin (stg-tree)
      </div>
    ),
    extra: <div className="nav-extra">entity</div>,
  },
];

const NAV = [
  {
    label: "Go To...",
    icon: <VscSearch />,
    subnav: NAV_SEARCH,
    menuTitle: "Go To...",
    openCommandPalette: true,
    keybinding: <Keybinding>K</Keybinding>,
    noUnpin: true,
  },
  {
    label: "Getting Started",
    menuTitle: "Getting Started",
    icon: <div className="donut" />,
    keybinding: <Keybinding>G</Keybinding>,
    noUnpin: true,
  },
  // {
  //   label: "Home",
  //   menuTitle: "Home",
  //   subnav: [],
  //   icon: <VscHome />,
  //   noUnpin: true,
  // },
  {
    label: "Dashboards",
    icon: <VscDashboard />,
    subnav: [],
    subdir: "/dashboards/",
    menuTitle: "Dashboards",
    noUnpin: true,
    //   subnav: NAV_DASHBOARD,
  },
  {
    label: "All Entities",
    menuTitle: "All Entities",
    subnav: [],

    url: "entities",
    icon: <VscGlobe />,
    hover: "",
    noUnpin: true,
    //   hasThirdNav: true,
    //   subdir: "/entities/",
    //   subnav: NAV_EXPLORER,
  },
  // {
  //   label: "Browse Data",
  //   icon: <VscCompass />,
  //   hasThirdNav: true,
  //   //   subnav: NAV_BROWSE,
  //   subdir: "/browse-data/",
  // },
  { label: "APM", menuTitle: "APM", subnav: [], icon: <VscGraphLine /> },
  {
    label: "Mobile",
    menuTitle: "Mobile",
    subnav: [],
    icon: <VscDeviceMobile />,
  },
  {
    label: "Browser",
    menuTitle: "Browser",
    subnav: [],
    icon: <VscBrowser />,
  },
  {
    label: "Infrastructure",
    menuTitle: "Infrastructure",
    subnav: [],

    icon: <VscServer />,
  },
  {
    label: "Alerts & AI",
    menuTitle: "Alerts & AI",
    subnav: [],

    icon: <VscWarning />,
    //   subnav: NAV_ALERTS,
    hasThirdNav: true,
    subdir: "/alerts--ai/",
  },
  {
    label: "Errors Inbox",
    menuTitle: "Errors Inbox",
    subnav: [],
    icon: <VscInbox />,
  },
  {
    label: "Logs",
    menuTitle: "Logs",
    subnav: [],

    icon: <VscListFlat />,
    hasThirdNav: true,
    subdir: "/logs/",
    //   subnav: NAV_LOGS,
  },
  {
    label: "Synthetics",
    menuTitle: "Synthetics",
    subnav: [],

    icon: <VscGithubAction />,
    hasThirdNav: true,
    subdir: "/synthetics",
    //   subnav: NAV_SYNTHETICS,
  },
  {
    label: "Messages",
    menuTitle: "Messages",
    subnav: [],

    labelDiv: (
      <span>
        Messages<span style={{ padding: "0 8px" }}> </span>
      </span>
    ),
    icon: <VscCommentDiscussion />,
    badge: <Badge>3</Badge>,
    noComment: true,
  },
];

const CAPABILITIES = [
  {
    label: "Home",
    menuTitle: "Home",
    subnav: [],
    icon: <VscHome />,
    noEllipsis: true,
  },
  ...NAV,
  ...NAV_LOGS,
  ...NAV_ALERTS,
  ...NAV_INBOX,
  ...NAV_MORE,
  ...NAV_INFRASTRUCTURE,
];

const QueryBuilder = (props: any) => {
  const [query, setQuery] = React.useState("");
  return (
    <Search
      className="half-width"
      autoFocus
      placeholder="Query your data"
      value={query}
      onChange={(q: string) => setQuery(q)}
    />
  );
};

const NAV_BOTTOM: any[] = [
  { label: "Invite", icon: <FiUserPlus /> },
  {
    label: "Peter Pezaris",
    icon: <img className="svg" src="https://i.imgur.com/jSrZwhT.jpg" />,
    url: "me",
    // subnav: NAV_FEEDBACK,
  },
  // { label: "What's New", icon: <MdOutlineWbSunny /> },
  // { label: "Feedback", icon: <VscFeedback />, subnav: NAV_FEEDBACK },
  // { label: "Invite", icon: <FiUserPlus /> },
  //   { label: "Setup", icon: <VscSettingsGear /> },
  // {
  //   label: "Query",
  //   labelDiv: (
  //     <div
  //       onClickCapture={(e) => {
  //         e.preventDefault();
  //         e.stopPropagation();
  //       }}
  //     >
  //       Query
  //     </div>
  //   ),
  //   // labelDiv: <QueryBuilder />,
  //   icon: <VscSearch />,
  // },
];

export const ThirdNav = (props: {
  title?: string;
  items: any[];
  subdir?: string;
  thirdNavState: string;
  setThirdNavState: Function;
}) => {
  //   return null;
  const toggleThirdNav = () => {
    props.setThirdNavState(props.thirdNavState === "open" ? "closed" : "open");
  };
  return (
    <>
      <ul className="links thirdnav subnav">
        <div className="hidebutton" onClick={toggleThirdNav}><VscChevronLeft /></div>
        {props.title && <li className="third-nav-title">{props.title}</li>}
        {props.items.map((item) => (
          <NavItem item={item} subdir={props.subdir} />
        ))}
      </ul>
    </>
  );
};

export const Menu = (props: {
  label?: string;
  items?: any[];
  subdir?: string;
  keybinding?: any;
}) => {
  if (!props.items) return null;
  const count = props.items.length;
  return (
    <ul
      className={`${
        count > 0 ? "with-subitems " : "no-subitems "
      }links submenu`}
    >
      <li className="menu-title">
        <div style={{ display: "flex" }}>
          <label style={{ marginRight: "20px" }}>{props.label}</label>
          <span style={{ marginLeft: "auto" }}> {props.keybinding}</span>
        </div>
      </li>
      {props.items.map((item) => (
        <NavItem item={item} subdir={props.subdir} />
      ))}
    </ul>
  );
};

const NavItem = (props: any) => {
  const item = props.item;
  const [expanded, setExpanded] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const label = item.label || item.title;
  if (label.startsWith("-")) {
    return <div className="sep">{item.icon} {item.label.replace("-", "")}</div>;
  }
  const to =
    item.isDefault && props.subdir
      ? props.subdir
      : (props.subdir || "/") +
        (item.url ||
          label
            .toLocaleLowerCase()
            .replace(" ", "-")
            .replace(" ", "-")
            .replace("&", ""));
  // console.warn("TO IS: ", to);

  const unPin = () => {
    if (props.unPin) props.unPin(props.item);
  };

  return (
    <li>
      <NavLink
        to={to}
        exact={item.isDefault && !item.noExact}
        activeClassName="active"
        onClick={(e) => {
          if (item.onClick) {
            item.onClick();
            e.stopPropagation();
            e.preventDefault();
            return false;
          } else if (item.openCommandPalette) {
            props.setCommandPanelOpen(!props.commandPanelOpen);
            e.stopPropagation();
            e.preventDefault();
            return false;
          }
          if (item.noComment) props.setCommentsState("closed");
        }}
        className={
          (props.className || item.className || "") + (item.isNew ? " new" : "") + (item.hidden ? " hidden" : "")
        }
      >
        {item.icon} <span className="label">{item.labelDiv || item.label}</span>
        {!props.noEllipsis && !item.noEllipsis && (
          <span
            className="ellipsis extra"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setMenuOpen(!menuOpen);
            }}
          >
            <VscEllipsis />
          </span>
        )}
        {menuOpen && (
          <div
            className="menu ellipsis"
            style={{ width: "100%" }}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setMenuOpen(false);
            }}
          >
            <ul>
              <li onClick={() => unPin()}>
                <VscPinned /> Unpin from menu
              </li>
            </ul>
          </div>
        )}
        {item.badge && item.badge}
        {item.extra && item.extra}
        {props.navState !== "normal" && item.menuTitle && (
          <span className={"hover"}>
            <Menu
              label={item.menuTitle || item.label}
              keybinding={item.keybinding}
              items={item.subnav}
              subdir={item.subdir}
            />
          </span>
        )}
      </NavLink>
    </li>
  );
};

const Nav = (props: any) => {
  const { nav } = props;
  return (
    <div className="nav">
      {/* <div className="resizer">
        {props.navState == "collapsed" ? (
          <VscChevronRight
            className="icon icon-left"
            onClick={() => props.setNavState("normal")}
          />
        ) : (
          <VscChevronLeft
            className="icon icon-left"
            onClick={() => props.setNavState("collapsed")}
          />
        )}
      </div>
      <div className="resizer-horizontal">
        <VscChevronUp
          className="icon icon-left"
          onClick={() => props.setNavState("horizontal")}
        />
      </div> */}
      <div
        className="logo-wrap"
        onClick={() =>
          props.setNavState(
            props.navState == "normal"
              ? "collapsed"
              // : props.navState == "collapsed"
              // ? "hidden"
              : //   : props.navState == "hidden"
                //   ? "horizontal"
                "normal"
          )
        }
      >
       <div className="logo">
         <div className="hidebutton"><VscChevronLeft /></div>
          <svg
            width="95"
            height="27"
            viewBox="0 0 124 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.7572 8.17188V15.4349L10.3748 19.0672V23.6068L20.7495 17.7055V5.90134L16.7572 8.17188Z"
              fill="#00AC69"
            ></path>
            <path
              d="M10.3747 4.54109L16.7572 8.17188L20.7495 5.90134L10.3747 0L0 5.90134L3.99075 8.17188L10.3747 4.54109Z"
              fill="#1CE783"
            ></path>
            <path
              d="M6.384 14.0747V21.3378L10.3747 23.6068V11.8042L0 5.90134V10.4424L6.384 14.0747Z"
              fill="#FAFBFB"
            ></path>
            <g className="Navigation_nav-element__Sg_wj">
              <path
                d="M34.9899 5.88501C32.7564 5.88501 31.6985 7.27496 31.6985 7.27496H31.5809L31.3473 6.11667H28.6421V17.9312H31.5809V11.1003C31.5809 9.59451 32.6359 8.55204 34.1671 8.55204C35.6982 8.55204 36.7532 9.59154 36.7532 11.1003V17.9312H39.692V10.8657C39.692 7.8541 37.6936 5.88501 34.9899 5.88501Z"
                fill="#FAFBFB"
              ></path>
              <path
                d="M66.6838 13.8772H66.515L64.5167 6.11667H61.5266L59.5282 13.8772H59.3609L57.361 6.11667H54.3047L57.361 17.9312H60.9403L62.9372 10.2865H63.106L65.1044 17.9312H68.6822L71.7386 6.11667H68.6822L66.6838 13.8772Z"
                fill="#FAFBFB"
              ></path>
              <path
                d="M80.7374 7.15911H80.6198L80.3847 6.11962H77.9161V17.9327H80.8549V11.1017C80.8549 9.59597 81.5603 8.901 83.0884 8.901H84.5955V6.11813H82.8473C82.4379 6.119 82.0342 6.21346 81.6681 6.39409C81.302 6.57472 80.9834 6.83659 80.7374 7.15911V7.15911Z"
                fill="#FAFBFB"
              ></path>
              <path
                d="M91.0986 5.88501C87.5735 5.88501 84.9874 8.43325 84.9874 12.0239C84.9874 15.6146 87.4273 18.1629 91.0986 18.1629C94.0721 18.1629 95.8625 16.4388 96.6085 15.1706L93.9108 14.2232C93.6441 14.7043 92.568 15.6295 91.0986 15.6295C89.385 15.6295 88.1613 14.5722 87.9262 12.9565H96.8587C96.9413 12.5759 96.9807 12.1874 96.9762 11.7982C96.9762 8.43325 94.3901 5.88501 91.0986 5.88501ZM87.9262 10.9815C88.2788 9.47571 89.3368 8.31742 91.0986 8.31742C92.7458 8.31742 93.8023 9.47571 94.0374 10.9815H87.9262Z"
                fill="#FAFBFB"
              ></path>
              <path
                d="M47.6841 5.88501C44.1575 5.88501 41.5714 8.43325 41.5714 12.0239C41.5714 15.6146 44.0068 18.1629 47.6841 18.1629C50.6575 18.1629 52.4465 16.4388 53.1925 15.1706L50.4948 14.2232C50.228 14.7043 49.1535 15.6295 47.6841 15.6295C45.9705 15.6295 44.7453 14.5722 44.5102 12.9565H53.4441C53.5267 12.5759 53.5662 12.1874 53.5617 11.7982C53.5617 8.43325 50.9755 5.88501 47.6841 5.88501ZM44.5102 10.9815C44.8628 9.47571 45.9208 8.31742 47.6841 8.31742C49.3298 8.31742 50.3878 9.47571 50.6229 10.9815H44.5102Z"
                fill="#FAFBFB"
              ></path>
              <path
                d="M107.25 1.45233H104.311V4.34806H107.25V1.45233Z"
                fill="#FAFBFB"
              ></path>
              <path
                d="M115.36 15.4988C113.596 15.4988 112.186 14.1089 112.186 12.0239C112.186 9.93902 113.596 8.54908 115.36 8.54908C117.123 8.54908 117.828 9.70736 118.063 10.4023L120.725 9.46977C120.08 7.81995 118.497 5.88501 115.36 5.88501C111.833 5.88501 109.247 8.43325 109.247 12.0239C109.247 15.6146 111.833 18.1629 115.36 18.1629C118.524 18.1629 120.107 16.1968 120.74 14.4682L118.063 13.5297C117.828 14.3405 117.123 15.4988 115.36 15.4988Z"
                fill="#FAFBFB"
              ></path>
              <path
                d="M97.3017 4.02581H98.9701V17.9312H101.909V1.45233H97.3017V4.02581Z"
                fill="#FAFBFB"
              ></path>
              <path
                d="M107.25 6.11667H104.311V17.9312H107.25V6.11667Z"
                fill="#FAFBFB"
              ></path>
              <path
                d="M122.313 15.6651C122.088 15.6619 121.868 15.7246 121.679 15.8453C121.491 15.9661 121.343 16.1393 121.254 16.3431C121.166 16.5468 121.141 16.7718 121.183 16.9895C121.225 17.2072 121.332 17.4077 121.489 17.5655C121.647 17.7233 121.849 17.8313 122.069 17.8757C122.29 17.9202 122.518 17.899 122.726 17.815C122.934 17.731 123.112 17.5879 123.238 17.4039C123.363 17.2199 123.43 17.0034 123.43 16.7818C123.435 16.6353 123.409 16.4892 123.355 16.3526C123.301 16.216 123.219 16.0917 123.115 15.9872C123.01 15.8828 122.885 15.8003 122.748 15.745C122.61 15.6896 122.462 15.6624 122.313 15.6651ZM122.313 17.7278C122.123 17.731 121.935 17.6783 121.775 17.5764C121.615 17.4744 121.49 17.3278 121.415 17.1553C121.339 16.9828 121.318 16.7921 121.353 16.6075C121.388 16.423 121.478 16.2529 121.612 16.119C121.746 15.985 121.917 15.8933 122.103 15.8555C122.29 15.8176 122.484 15.8354 122.66 15.9065C122.836 15.9775 122.987 16.0988 123.094 16.2546C123.2 16.4105 123.257 16.5941 123.257 16.7818C123.261 16.9056 123.24 17.0288 123.194 17.1441C123.148 17.2594 123.079 17.3643 122.991 17.4523C122.902 17.5403 122.797 17.6096 122.68 17.656C122.564 17.7023 122.439 17.7247 122.313 17.7218V17.7278Z"
                fill="#FAFBFB"
              ></path>
              <path
                d="M122.8 16.5754C122.8 16.5218 122.788 16.4689 122.766 16.4199C122.745 16.3708 122.713 16.3267 122.673 16.2903C122.633 16.2538 122.586 16.2258 122.535 16.2079C122.484 16.19 122.429 16.1827 122.375 16.1863H121.872V17.3506H122.045V16.9466H122.203L122.612 17.3506H122.827L122.419 16.9466C122.519 16.9467 122.615 16.9077 122.687 16.8382C122.758 16.7687 122.799 16.6743 122.8 16.5754V16.5754ZM122.047 16.7759V16.3571H122.375C122.407 16.3534 122.439 16.3562 122.469 16.3654C122.499 16.3746 122.527 16.39 122.551 16.4106C122.575 16.4312 122.594 16.4565 122.607 16.4849C122.621 16.5133 122.628 16.5441 122.628 16.5754C122.628 16.6987 122.548 16.7759 122.375 16.7759H122.047Z"
                fill="#FAFBFB"
              ></path>
            </g>
          </svg>{" "}
          {/*<VscArrowUp className="icon icon-up" />*/}
          {/* <img className="logo-svg" src={logo} alt="logo" /> */}
        </div>
      </div>

      {props.navState === "hidden" && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 400,
            cursor: "pointer",
          }}
          onClick={() => props.setNavState("normal")}
        />
      )}
      <ul className="links scroll" style={{ marginTop: 0 }}>
        {nav.map((item: any) => (
          <NavItem
            item={item}
            topLevel
            setCommentsState={props.setCommentsState}
            commentsState={props.commentsState}
            setCommandPanelOpen={props.setCommandPanelOpen}
            commandPanelOpen={props.commandPanelOpen}
            navState={props.navState}
            unPin={props.unPin}
          />
        ))}
      </ul>

      <div className="bottom">
        <ul className="links">
          {NAV_BOTTOM.map((item) => (
            <NavItem
              item={item}
              setCommentsState={props.setCommentsState}
              commentsState={props.commentsState}
              noEllipsis
            />
          ))}
          <img
            src="https://i.imgur.com/lYDpx6c.png"
            style={{ width: "1px", height: "0px" }}
          />
        </ul>
      </div>
    </div>
  );
};

const Header = (props: any) => {
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [shareOpen, setShareOpen] = React.useState(false);
  const [userOpen, setUserOpen] = React.useState(false);
  const [accountOpen, setAccountOpen] = React.useState(false);
  const location = useLocation();

  const [pathname, setPathname] = React.useState<string>(location.pathname);
  const [resolved, setResolved] = React.useState<{ [foo: string]: any }>({
    dashboards: true,
  });

  React.useEffect(() => {
    if (props.commentsState !== "float") setPathname(location.pathname);
  }, [location.pathname, props.commentState]);

  // console.warn("pathname is: ", pathname);
  const commentThread = pathname.endsWith("dashboards")
    ? "dashboards"
    : pathname.endsWith("browse-data")
    ? "browse"
    : pathname.endsWith("apm")
    ? "apm"
    : pathname.endsWith("mobile")
    ? "mobile"
    : "";

  const threadState =
    resolved[commentThread] || resolved[commentThread] === false
      ? "closed"
      : "open";

  const color = threadState == "open" ? "green" : "purple";

  const hasTimepicker = pathname.includes("explorer/K");
  const hasAccountpicker = pathname.includes("explore") || true;
  return (
    <div className="header" id="header-div">
      <Comments
        threadState={threadState}
        commentThread={commentThread}
        resolved={resolved}
        pathname={pathname}
        setResolved={setResolved}
        commentsState={props.commentsState}
        setCommentsState={props.setCommentsState}
        offScreen={props.commentsState == "closed"}
      />
      <RightPane paneState={props.helpState}>
        <div className="placeholder">Contextual help goes here</div>
      </RightPane>
      <RightPane paneState={props.inviteState}>
        <div className="placeholder">Invite goes here</div>
      </RightPane>
      <RightPane paneState={props.shareState}>
        <div className="button-list">
          <button>
            <VscCopy />
            Copy permalink
          </button>
          <button>
            <VscMail />
            Share via Email
          </button>
          <button>
            <BsSlack />
            Share to Slack
          </button>
          <button>
            <SiMicrosoftteams />
            Share to MS Teams
          </button>
          <button>
            <SiJirasoftware />
            Create Jira Ticket
          </button>
        </div>
      </RightPane>
      <button
        className={searchOpen ? "active search-button" : "search-button"}
        onClick={() => setSearchOpen(!searchOpen)}
        style={{ display: "none" }}
      >
        <label>
          <VscSearch style={{ verticalAlign: "-2px", marginRight: "5px" }} />
          <span>Search</span>
          <div className="search-shortcut">
            <Slash />
          </div>
        </label>
        {searchOpen && (
          <div className="menu" style={{ width: "100%" }}>
            <ul>
              <hr />
              <div style={{ padding: "5px 15px", display: "none" }}>
                <div className="filters">
                  <div className="group">
                    <button className="selected">Search New Relic One</button>
                    <button>Query Builder</button>
                    <button>Data Explorer</button>
                  </div>
                </div>
              </div>
              <li>Most recent</li>
              <li>Julian's log test account</li>
              <li>Json_logs</li>
              <li>Cell Logging Testing 7</li>
              <li>Account with suffixed license dt</li>
              <hr />
              <li>AAA Research</li>
              <li>abrunner</li>
              <li>abuchanan</li>
              <li>Account-Nerdlet</li>
              <li>Acct_test</li>
              <li>ace</li>
              <li>ace: eu-production</li>
            </ul>
          </div>
        )}
      </button>
      {/* 
    <button>
      <VscChromeMaximize
        style={{ verticalAlign: "-2px", marginRight: "5px" }}
      />
      Maximize
    </button>
    */}
      <div style={{ marginLeft: "auto", alignSelf: "center" }}>
        {hasTimepicker && <Timepicker />}
      </div>
      {hasAccountpicker && (
        <button
          className={accountOpen ? "active" : ""}
          onClick={() => setAccountOpen(!accountOpen)}
        >
          <label>
            Account: Sunstone Staging{" "}
            <VscChevronDown style={{ verticalAlign: "-2px" }} />
          </label>
          {accountOpen && (
            <div className="menu" style={{ width: "100%" }}>
              <ul>
                <hr />
                <li>
                  <VscSearch /> Search
                </li>
                <hr />
                <li>Most recent</li>
                <li>Julian's log test account</li>
                <li>Json_logs</li>
                <li>Cell Logging Testing 7</li>
                <li>Account with suffixed license dt</li>
                <hr />
                <li>AAA Research</li>
                <li>abrunner</li>
                <li>abuchanan</li>
                <li>Account-Nerdlet</li>
                <li>Acct_test</li>
                <li>ace</li>
                <li>ace: eu-production</li>
              </ul>
            </div>
          )}
        </button>
      )}
      <button
        className={userOpen ? "active" : ""}
        onClick={() => setUserOpen(!userOpen)}
        style={{ display: "none" }}
      >
        <label>
          <img src="https://i.imgur.com/jSrZwhT.jpg" />
          <VscChevronDown style={{ verticalAlign: "-2px" }} />
        </label>
        {userOpen && (
          <div className="menu">
            <ul>
              <li>User preferences</li>
              <li>API keys</li>
              <li>Manage your plan</li>
              <hr />
              <li>Account settings</li>
              <hr />
              <li onClick={props.toggleTheme}>Theme</li>
              <li>NRQL console</li>
              <hr />
              <li>Add more data</li>
              <li>Manage your data</li>
              <li>View your usage</li>
              <hr />
              <li>Support</li>
              <hr />
              <li style={{ color: "#f66" }}>Logout</li>
            </ul>
          </div>
        )}
      </button>
      <button
        className={
          props.consoleState === "open"
            ? "comment-button active rounded"
            : "comment-button rounded"
        }
        onClick={() => {
          props.consoleState === "closed"
            ? props.setConsoleState("open")
            : props.setConsoleState("closed");
        }}
      >
        <label>
          <VscChevronRight
            style={{ verticalAlign: "-2px" }}
            title="Query console"
          />
        </label>
      </button>
      {/* <button
        className={
          props.inviteState === "open"
            ? "comment-button active rounded"
            : "comment-button rounded"
        }
        onClick={() => {
          props.setShareState("closed");
          props.setHelpState("closed");
          props.setCommentsState("closed");
          props.inviteState === "closed"
            ? props.setInviteState("open")
            : props.setInviteState("closed");
        }}
      >
        <label>
          <FiUserPlus style={{ verticalAlign: "-2px" }} />
        </label>
      </button> */}
      <button
        className={
          props.shareState === "open"
            ? "comment-button active rounded"
            : "comment-button rounded"
        }
        onClick={() => {
          props.setInviteState("closed");
          props.setHelpState("closed");
          props.setCommentsState("closed");
          props.shareState === "closed"
            ? props.setShareState("open")
            : props.setShareState("closed");
        }}
      >
        <label>
          <FiShare2 style={{ verticalAlign: "-2px" }} />
        </label>
      </button>{" "}
      <button
        className={
          props.commentsState === "open"
            ? "comment-button active rounded"
            : "comment-button rounded"
        }
        onClick={() => {
          props.setInviteState("closed");
          props.setShareState("closed");
          props.setHelpState("closed");
          props.commentsState === "closed"
            ? props.setCommentsState("open")
            : props.setCommentsState("closed");
        }}
      >
        {location.pathname.endsWith("browse-data") ? (
          <Badge className={color}>5</Badge>
        ) : location.pathname.endsWith("dashboards") ? (
          <Badge className={color}>6</Badge>
        ) : location.pathname.endsWith("apm") ? (
          <Badge className={color}>6</Badge>
        ) : location.pathname.endsWith("mobile") ? (
          <Badge className={color}>4</Badge>
        ) : (
          <FiMessageSquare style={{ verticalAlign: "-2px" }} />
        )}
      </button>
      <button
        className={
          props.helpState === "open"
            ? "comment-button active rounded"
            : "comment-button rounded"
        }
        onClick={() => {
          props.setInviteState("closed");
          props.setShareState("closed");
          props.setCommentsState("closed");
          props.helpState === "closed"
            ? props.setHelpState("open")
            : props.setHelpState("closed");
        }}
      >
        <label>
          <BsQuestion style={{ verticalAlign: "-2px" }} />
        </label>
      </button>
    </div>
  );
};

const CommandPanel = (props: any) => {
  const commands = [
    // { label: "Search", key: "S", icon: <VscSearch />, url: "/search" },
    { label: "Query Your Data", key: "Q", icon: <VscQuestion />, url: "" },
    { label: "Add Data", key: "A", icon: <VscAdd />, url: "/add-data" },
    { label: "User Preferences", key: "", icon: <VscGear />, url: "" },
    { label: "Account Settings", key: "", icon: <VscGear />, url: "" },
    { label: "Change Theme", key: "", icon: <VscGear />, url: "" },
    { label: "Switch Account", key: "", icon: <VscGear />, url: "" },
    { label: "Help", icon: <VscQuestion />, url: "/help" },
    { label: "Invite", icon: <FiUserPlus />, url: "/invite" },
    { label: "What's New", icon: <MdOutlineWbSunny />, url: "/whats-new" },
    { label: "View usage", key: "", icon: <VscAdd />, url: "" },
    { label: "Setup", key: "", icon: <VscAdd />, url: "/add-data" },
    { icon: <VscCopy />, label: "Copy permalink", url: "" },
    { icon: <VscMail />, label: "Share via Email", url: "" },
    { icon: <BsSlack />, label: "Share to Slack", url: "" },
    { icon: <SiMicrosoftteams />, label: "Share to MS Teams", url: "" },
    { icon: <SiJirasoftware />, label: "Create Jira Ticket", url: "" },
    { label: "APM", icon: <VscGraphLine />, url: "/applications" },
    { label: "Explorer", icon: <VscGlobe />, url: "/explorer" },
    { label: "Browse Data", icon: <VscCompass />, url: "/browse-data" },
    { label: "Dashboards", icon: <VscDashboard />, url: "/dashboards" },
    { label: "Alerts & AI", icon: <VscWarning />, url: "/alerts--ai" },
    { label: "Errors Inbox", icon: <VscInbox />, url: "/errors-inbox" },
    { label: "Browser", icon: <VscBrowser />, url: "/browser" },
    { label: "Infrastructure", icon: <VscServer />, url: "/infrastructure" },
    { label: "Logs", icon: <VscListFlat />, url: "/logs" },
    { label: "Mobile", icon: <VscDeviceMobile />, url: "/mobile" },
    { label: "Synthetics", icon: <VscGithubAction />, url: "/synthetics" },
    { label: "Messages", icon: <VscCommentDiscussion />, url: "/messages" },
  ];

  const history = useHistory();
  const [query, setQuery] = React.useState("");
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const handleClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  const activeCommands = commands.filter((c) => {
    return !query || c.label.toLocaleLowerCase().includes(query);
  });

  const onKeyDown = (e: KeyboardEvent) => {
    // console.warn("COMMAND DOWN: ", e);
    if (e.key === "ArrowDown") {
      setSelectedIndex(selectedIndex + 1);
    } else if (e.key === "ArrowUp") {
      setSelectedIndex(selectedIndex - 1);
    } else if (e.key === "Enter") {
      props.setCommandPanelOpen(false);
      history.push(activeCommands[selectedIndex].url);
    }
  };
  const handleClickCommand = (e: any) => {
    props.setCommandPanelOpen(false);
    history.push(activeCommands[selectedIndex].url);
    return false;
  };

  return (
    <div className="popup" onClick={handleClick} onKeyDown={onKeyDown}>
      <div className="popup-title">Go To...</div>
      <hr />
      <input
        className="command-input"
        type="text"
        autoFocus
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setQuery(e.target.value);
          setSelectedIndex(0);
        }}
      />
      <div className="command-list" onClick={handleClickCommand}>
        {activeCommands.map((c, index) => {
          return (
            <div
              className={`command ${index === selectedIndex ? "hover" : ""}`}
              onMouseEnter={(e: any) => setSelectedIndex(index)}
            >
              <div className="command-icon">{c.icon}</div>
              <div className="command-title">{c.label}</div>
              {c.key && <div className="command-key">{c.key}</div>}
            </div>
          );
        })}
        {activeCommands.length === 0 && (
          <>
            {" "}
            <hr />
            <div className="command-hint">
              Try: "Search", "Query", "Add More Data"
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const Console = (props: any) => {
  return <div className="console">Type your query here...</div>;
};
const USERSNAP_GLOBAL_API_KEY = "890302de-964c-40fc-bde6-458b2c3f709e";
const USERSNAP_API_KEY = "829c6c2b-293d-4dc1-8863-6df644dbfd09";

export default function App() {
  const [commentsState, setCommentsState] = React.useState("closed");
  const [helpState, setHelpState] = React.useState("closed");
  const [inviteState, setInviteState] = React.useState("closed");
  const [shareState, setShareState] = React.useState("closed");
  const [consoleState, setConsoleState] = React.useState("closed");
  const [thirdNavState, setThirdNavState] = React.useState("open");
  const [theme, setTheme] = React.useState("dark");
  const [navState, setNavState] = React.useState<
    "normal" | "collapsed" | "hidden" | "horizontal"
  >("normal");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const [commandPanelOpen, setCommandPanelOpen] = React.useState(false);

  function onKeyDown(this: HTMLElement, ev: Event) {
    // console.warn("DOWN: ", e);
    // @ts-ignore
    if (ev.key === "Escape") {
      setCommandPanelOpen(false);
    }
  }

  function onKeyPress(this: HTMLElement, ev: Event) {
    // @ts-ignore
    // console.warn("PRESS: ", ev);
    // @ts-ignore
    if (ev.key === "k" && ev.target.id === "main-page") {
      if (!commandPanelOpen) {
        ev.preventDefault();
        ev.stopPropagation();
      }
      setCommandPanelOpen(true);
    }
    return false;
  }

  const onClick = (e: any) => {
    setCommandPanelOpen(false);
  };

  React.useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keypress", onKeyPress);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keypress", onKeyPress);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  const unPin = (item: any) => {
    const index = nav.findIndex((i) => i.label === item.label);

    if (index > -1) {
      const newNav = [...nav];
      newNav.splice(index, 1, {...nav[index], isNew: false, hidden: true});
      setNav(newNav);
    }
  };

//toggle pinned state
  const pin = (item: any) => {
    const index = nav.findIndex((i) => i.label === item.label);

    const newNav = [...nav];
    if (index > -1) {
      if (nav[index].hidden) {
        newNav.splice(index, 1, { ...nav[index], isNew: true, hidden: false });
        setNav(newNav);
      }
      else {
        // item is visible
        newNav.splice(index, 1, { ...nav[index], isNew: false, hidden: true });
        setNav(newNav);
      }
    } else {
      // newNav.forEach(item => {item.isNew = false});
      // newNav.splice(3, 0, {...item, isNew: true, hidden: false});
      // setNav(newNav);
      setNav([...newNav, { ...item, isNew: true, hidden: false }]);
    }
  };
  
  const docs = () => {
    setHelpState("open");
  };
  
  const [nav, setNav] = React.useState<any[]>([
    //   { label: "Search", icon: <VscSearch />, hover: <CmdK /> },
    {
      label: "Go To...",
      icon: <VscSearch />,
      subnav: NAV_SEARCH,
      menuTitle: "Go To...",
      openCommandPalette: true,
      keybinding: <Keybinding>K</Keybinding>,
      noEllipsis: true,
      hidden: false,
    },
    {
      label: "Add Data",
      menuTitle: "Add Data",
      subnav: [],
      icon: <VscAdd />,
      noEllipsis: true,
    },
    {
      label: "All Capabilities",
      menuTitle: "All Capabilities",
      subnav: [],
      icon: <MdGridView />,
      noEllipsis: true,
    },
    // {
    //   label: "Home",
    //   menuTitle: "Home",
    //   subnav: [],
    //   icon: <VscHome />,
    //   noEllipsis: true,
    // },
    // {
    //   label: "Getting Started",
    //   menuTitle: "Getting Started",
    //   icon: <div className="donut" />,
    //   keybinding: <Keybinding>G</Keybinding>,
    //   noEllipsis: true,
    // },
    {
      label: "Dashboards",
      icon: <VscDashboard />,
      subnav: [],
      subdir: "/dashboards/",
      menuTitle: "Dashboards",
      //   subnav: NAV_DASHBOARD,
    },
    {
      label: "All Entities",
      menuTitle: "All Entities",
      subnav: [],
      url: "entities",
      icon: <VscGlobe />,
      noExact: true,
      hover: "",
      //   hasThirdNav: true,
      //   subdir: "/entities/",
      //   subnav: NAV_EXPLORER,
    },
    // {
    //   label: "Browse Data",
    //   icon: <VscCompass />,
    //   hasThirdNav: true,
    //   //   subnav: NAV_BROWSE,
    //   subdir: "/browse-data/",
    // },
    { label: "APM", menuTitle: "APM", subnav: [], icon: <VscGraphLine /> },
    {
      label: "Mobile",
      menuTitle: "Mobile",
      subnav: [],
      icon: <VscDeviceMobile />,
    },
    {
      label: "Browser",
      menuTitle: "Browser",
      subnav: [],
      icon: <VscBrowser />,
    },
    {
      label: "Infrastructure",
      menuTitle: "Infrastructure",
      subnav: [],
      icon: <VscServer />,
    },
    {
      label: "Alerts & AI",
      menuTitle: "Alerts & AI",
      subnav: [],

      icon: <VscWarning />,
      //   subnav: NAV_ALERTS,
      hasThirdNav: true,
      subdir: "/alerts--ai/",
    },
    {
      label: "Errors Inbox",
      menuTitle: "Errors Inbox",
      subnav: [],
      icon: <VscInbox />,
    },
    {
      label: "Logs",
      menuTitle: "Logs",
      subnav: [],

      icon: <VscListFlat />,
      hasThirdNav: true,
      subdir: "/logs/",
      //   subnav: NAV_LOGS,
    },
    {
      label: "Synthetics",
      menuTitle: "Synthetics",
      subnav: [],
      icon: <VscGithubAction />,
      hasThirdNav: true,
      subdir: "/synthetics",
      //   subnav: NAV_SYNTHETICS,
    },
    {
      label: "Messages",
      menuTitle: "Messages",
      subnav: [],

      labelDiv: (
        <span>
          Messages<span style={{ padding: "0 8px" }}> </span>
        </span>
      ),
      icon: <VscCommentDiscussion />,
      badge: <Badge>3</Badge>,
      noComment: true,
    },
  ]);

  const [dragging, setDragging] = React.useState(false);

  const handleStart = () => {
    setDragging(true);
  };
  const handleDrag = (e: any) => {
    // console.warn("E IS: ", e);
    const left = e.clientX;
    const width = window.innerWidth;
    const $detailPane = document.querySelector(".detail-pane");
    const detailPaneWidth = width - left;
    if ($detailPane) $detailPane.setAttribute("style", `width: ${detailPaneWidth}px`);

  };
  const handleStop = () => {
    setDragging(false);
  };

  return (
    <>
      {" "}
      <Helmet>
        <script type="text/javascript">
          {`
            window.onUsersnapCXLoad = function(api) {
              api.init();
              window.Usersnap = api;
            }
            var script = document.createElement('script');
            script.defer = 1;
            script.src = 'https://widget.usersnap.com/global/load/${USERSNAP_GLOBAL_API_KEY}?onload=onUsersnapCXLoad';
            document.getElementsByTagName('head')[0].appendChild(script);
        `}
        </script>
      </Helmet>
      <Router>
        <div
          className={`page ${navState} ${theme} console-${consoleState} third-nav-${thirdNavState}${dragging ? " dragging" : ""}`}
          id="main-page"
          onClick={onClick}
          tabIndex={0}
        >
          <Nav
            setCommentsState={setCommentsState}
            commentsState={commentsState}
            setNavState={setNavState}
            navState={navState}
            setCommandPanelOpen={setCommandPanelOpen}
            commandPanelOpen={commandPanelOpen}
            nav={nav}
            unPin={unPin}
          />
          <div className="body">
            {commandPanelOpen && (
              <CommandPanel setCommandPanelOpen={setCommandPanelOpen} />
            )}
            <Header
              toggleTheme={toggleTheme}
              commentsState={commentsState}
              setCommentsState={setCommentsState}
              helpState={helpState}
              setHelpState={setHelpState}
              shareState={shareState}
              setShareState={setShareState}
              inviteState={inviteState}
              setInviteState={setInviteState}
              consoleState={consoleState}
              setConsoleState={setConsoleState}
            />
            <div
              style={{
                paddingRight:
                  commentsState === "open" ||
                  helpState === "open" ||
                  inviteState === "open" ||
                  shareState === "open"
                    ? "300px"
                    : "0",
                position: "relative",
                transition: "padding-right 0.2s",
              }}
            >
              <Switch>
                <Route exact path="/getting-started">
                  <GettingStarted />
                </Route>
                <Route exact path="/home">
                  <GettingStarted />
                </Route>
                <Route path="/add-data">
                  <AddData pin={pin} thirdNavState={thirdNavState} setThirdNavState={setThirdNavState} />
                </Route>
                <Route exact path="/all-capabilities">
                  <AllCapabilities pin={pin} docs={docs} nav={nav} />
                </Route>
                <Route exact path="/configure">
                  <AddData />
                </Route>
                <Route path="/entities">
                  <Explorer thirdNavState={thirdNavState} setThirdNavState={setThirdNavState} />
                </Route>
                <Route path="/explorer/logs">
                  <Explorer subtitle="Logs" />
                </Route>
                <Route path="/explorer/traces">
                  <Explorer subtitle="Traces" />
                </Route>
                <Route path="/explorer/your-system">
                  <Explorer subtitle="Your System" />
                </Route>
                <Route path="/explorer/other-entities">
                  <Explorer subtitle="Other Entities" />
                </Route>
                <Route path="/explorer/synthetics">
                  <Explorer subtitle="Synthetics" />
                </Route>
                <Route path="/explorer/kubernetes">
                  <Explorer subtitle="Kubernetes" />
                </Route>
                <Route path="/explorer/aws">
                  <Explorer subtitle="AWS" />
                </Route>
                <Route path="/explorer/azure">
                  <Explorer subtitle="Azure" />
                </Route>
                <Route path="/explorer">
                  <Explorer subtitle="All Entities" />
                </Route>
                <Route path="/browse-data">
                  <BrowseData />
                </Route>
                <Route path="/dashboards">
                  <Dashboards />
                </Route>
                <Route path="/logs">
                  <Logs />
                </Route>
                <Route path="/alerts--ai">
                  <Alerts />
                </Route>
                <Route path="/errors-inbox">
                  <ErrorsInbox />
                </Route>
                <Route path="/apm">
                  <APM />
                </Route>
                <Route path="/browser">
                  <Browser />
                </Route>
                <Route path="/infrastructure">
                  <Infrastructure />
                </Route>
                <Route path="/synthetics">
                  <Synthetics />
                </Route>
                <Route path="/messages">
                  <Messages setCommentsState={setCommentsState} />
                </Route>
                <Route path="/mobile">
                  <Mobile />
                </Route>
                <Route path="/help">
                  <Help />
                </Route>
                <Route path="/configure/detection-configuration">
                  <DetectionConfiguration />
                </Route>
                <Route exact path="/nrx/add-data">
                  <AddData />
                </Route>
                <Route exact path="/nrx/explorer">
                  <Explorer />
                </Route>
                <Route path="/nrx/browse-data">
                  <BrowseData />
                </Route>
                <Route path="/nrx/dashboards">
                  <Dashboards />
                </Route>
                <Route path="/nrx/logs">
                  <Logs />
                </Route>
                <Route path="/nrx/alerts--ai">
                  <Alerts />
                </Route>
                <Route path="/nrx/messages">
                  <Messages setCommentsState={setCommentsState} />
                </Route>
                <Route path="/nrx/mobile">
                  <Mobile />
                </Route>
                <Route path="/nrx">
                  <Explorer view="all"/>
                </Route>
                <Route path="/me">
                  <Me toggleTheme={toggleTheme} theme={theme} />
                </Route>
              </Switch>
            </div>
          </div>
          <Console />
          <Draggable
            axis="x"
            onStart={handleStart}
            onDrag={handleDrag}
            onStop={handleStop}
          >
            <div className="resize-details" />
          </Draggable>
        </div>
      </Router>
    </>
  );
}

// grouping dashboards
// shared dashboard groups
