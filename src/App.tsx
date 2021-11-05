import { useLocation } from "react-router-dom";
import "./App.css";
import logo from "./logo2.svg";
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
  VscHome,
  VscCopy,
  VscChevronLeft,
  VscChevronRight,
} from "react-icons/vsc";

import { BsSlack } from "react-icons/bs";
import { SiJirasoftware, SiMicrosoftteams } from "react-icons/si";

import { FiShare2, FiUserPlus, FiMessageSquare } from "react-icons/fi";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import { Messages } from "./Messages";
import { Comments } from "./Comments";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export const Content = (props: any) => {
  return <div className="content">{props.children}</div>;
};

export const Title = (props: any) => {
  return <div className="title">{props.children}</div>;
};

const Step = (props: any) => {
  return (
    <div className="step">
      <div className={props.checked ? "step-number checked" : "step-number"}>
        {props.number}
      </div>
      <div className="step-title">{props.title}</div>
      {props.children}
      <div className="mention learn-more">Show me how</div>
    </div>
  );
};
const Home = (props: any) => {
  return (
    <Content>
      <Title>Getting Started</Title>
      <div className="getting-started">
        <Step title="Add your data" number="✔" checked>
          Connect your data to New Relic and gain insights in 5 minutes.
        </Step>
        <Step title="Explore your data" number="✔" checked>
          Traverse your entire stack in one place.
        </Step>
        <Step title="Monitor critical workflows" number="3">
          Detect outages and poor performance before your users notice.
        </Step>
        <Step title="Configure an alert" number="4">
          Configure an alert and we'll tell you when to worry.
        </Step>
        <Step title="Query your data" number="5">
          Write your first query in our powerful New Relic Query Language
          (NRQL).
        </Step>
        <Step title="Set up a dashboard" number="6">
          Create and share dashboards that matter to you and your team.
        </Step>
        <Step title="Invite your teammates" number="✔" checked>
          Create and share dashboards that matter to you and your team.
        </Step>
      </div>
      <Title>Add Data</Title>
      <img src="https://i.imgur.com/iOZgwom.png" style={{ width: "100%" }} />
    </Content>
  );
};

const Explorer = (props: any) => {
  return (
    <Content>
      <Title>Explorer</Title>
      <img src="https://i.imgur.com/lYDpx6c.png" style={{ width: "100%" }} />
    </Content>
  );
};

const Mobile = (props: any) => {
  return (
    <Content>
      <Title>Mobile</Title>
      <img src="https://i.imgur.com/FVcAiJC.png" style={{ width: "100%" }} />
    </Content>
  );
};

const Alerts = (props: any) => {
  return (
    <Content>
      <Title>Alerts &amp; AI</Title>
      <img src="https://i.imgur.com/mIZAU3v.png" style={{ width: "100%" }} />
    </Content>
  );
};

const Logs = (props: any) => {
  return (
    <Content>
      <Title>Logs</Title>
      <img src="https://i.imgur.com/g0St7AZ.png" style={{ width: "100%" }} />
    </Content>
  );
};

const BrowseData = (props: any) => {
  return (
    <Content>
      <Title>Browse Data</Title>
      <img src="https://i.imgur.com/QxHws6n.png" style={{ width: "100%" }} />
    </Content>
  );
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

const Dashboards = (props: any) => {
  return (
    <Content>
      <Banner />
      <Title>Dashboards</Title>
      <img src="https://i.imgur.com/S3USDNH.png" style={{ width: "100%" }} />
    </Content>
  );
};

const Badge = (props: any) => {
  return <div className="badge">{props.children}</div>;
};

const CmdK = (props: any) => {
  return <div className="keybinding">⌘ K</div>;
};

const NAV_BROWSE = [
  { label: "Events" },
  { label: "Metrics" },
  { label: "Logs" },
  { label: "Traces" },
];

const NAV_DASHBOARD = [
  { label: "Mel Test" },
  { label: "Mel Test / Mel Test" },
  { label: "Sonja Test Dashboard" },
  { label: "vinit" },
  { label: "vinit / vinit" },
  { label: "Weekly_UI_Testing_Dash" },
];

const NAV_MORE = [
  { label: "AWS Lamba Setup" },
  { label: "Key Transactions" },
  { label: "Kubernetes" },
  { label: "Legacy custom dashboards" },
  { label: "Lookout" },
  { label: "Manage Insights data" },
  { label: "Network" },
  { label: "New Relic Edge" },
  { label: "Plugins" },
  { label: "Serverless" },
  { label: "Service Levels" },
  { label: "Service Maps" },
  { label: "Traces" },
  { label: "Workload views" },
  { label: "-Customize this list" },
];

const NAV_ALERTS = [
  { label: "Overview" },
  { label: "Issues & activity" },
  { label: "-Alerts" },
  { label: "Incidents" },
  { label: "Events" },
  { label: "Policies" },
  { label: "Notification channels" },
  { label: "Muting rules" },
  { label: "-Proactive Detection" },
  { label: "Settings" },
  { label: "-Incident Intelligence" },
  { label: "Decisions" },
  { label: "Sources" },
  { label: "Destinations" },
  { label: "Pathways" },
  { label: "System settings" },
  { label: "-Enrich & Respond" },
  { label: "Workflows" },
  { label: "Destinations" },
];

const NAV = [
  //   { label: "Search", icon: <VscSearch />, hover: <CmdK /> },
  { label: "Home", icon: <VscHome /> },
  { label: "Explorer", icon: <VscGlobe />, hover: "" },
  {
    label: "Browse Data",
    icon: <VscCompass />,
    extra: <VscChevronDown />,
    subnav: NAV_BROWSE,
  },
  {
    label: "Dashboards",
    icon: <VscDashboard />,
    extra: <VscChevronDown />,
    subnav: NAV_DASHBOARD,
  },
  {
    label: "Alerts & AI",
    icon: <VscWarning />,
    extra: <VscChevronDown />,
    subnav: NAV_ALERTS,
  },
  { label: "Errors Inbox", icon: <VscInbox /> },
  { label: "APM", icon: <VscGraphLine />, extra: <VscChevronDown /> },
  { label: "Browser", icon: <VscBrowser />, extra: <VscChevronDown /> },
  { label: "Infrastructure", icon: <VscServer />, extra: <VscChevronDown /> },
  { label: "Logs", icon: <VscListFlat /> },
  { label: "Mobile", icon: <VscDeviceMobile />, extra: <VscChevronDown /> },
  { label: "Synthetics", icon: <VscGithubAction />, extra: <VscChevronDown /> },
  {
    label: "Messages",
    icon: <VscComment />,
    badge: <Badge>3</Badge>,
    noComment: true,
  },
  { label: "More", icon: <VscEllipsis />, subnav: NAV_MORE },
];

const Menu = (props: { items: any[] }) => {
  return (
    <ul className="links submenu">
      {props.items.map((item) => (
        <NavItem item={item} />
      ))}
    </ul>
  );
};

const NavItem = (props: any) => {
  const item = props.item;
  if (item.label.startsWith("-")) {
    return <div className="sep">{item.label.replace("-", "")}</div>;
  }
  return (
    <li>
      <NavLink
        to={item.label
          .toLocaleLowerCase()
          .replace(" ", "-")
          .replace(" ", "-")
          .replace("&", "")}
        activeClassName="active"
        onClick={() =>
          item.noComment ? props.setCommentsState("closed") : null
        }
      >
        {item.icon} <span className="label">{item.label}</span>
        <span className="extra">{item.extra}</span>
        {item.badge && item.badge}
        {item.subnav && (
          <span className="hover">
            <Menu items={item.subnav} />
          </span>
        )}
      </NavLink>
    </li>
  );
};

const Nav = (props: any) => {
  const [collapsed, setCollapsed] = React.useState(false);
  return (
    <div className={collapsed ? "nav collapsed" : "nav"}>
      {/* collapsed ? (
        <VscChevronRight
          className="icon icon-left"
          onClick={() => setCollapsed(!collapsed)}
        />
      ) : (
        <VscChevronLeft
          className="icon icon-left"
          onClick={() => setCollapsed(!collapsed)}
        />
      ) */}
      <div className="logo-wrap" onClick={() => setCollapsed(!collapsed)}>
        <div className="logo">
          {/*<VscArrowUp className="icon icon-up" />*/}
          <img className="logo-svg" src={logo} alt="logo" />
        </div>
      </div>

      <ul className="links" style={{ marginTop: 0 }}>
        {NAV.map((item) => (
          <NavItem
            item={item}
            setCommentsState={props.setCommentsState}
            commentsState={props.commentsState}
          />
        ))}
      </ul>
      <div className="bottom">
        <ul className="links">
          <li>
            <NavLink to="/account" activeClassName="active">
              <VscQuestion /> Help
            </NavLink>
          </li>
          <li>
            <NavLink to="/feedback" activeClassName="active">
              <VscFeedback /> Feedback
            </NavLink>
          </li>
          <li>
            <NavLink to="/invite" activeClassName="active">
              <FiUserPlus /> Invite
            </NavLink>
          </li>
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
  return (
    <div className="header">
      <button
        style={{
          margin: "0 auto 0 0",
          flexGrow: 2,
          textAlign: "left",
          position: "relative",
        }}
        className={searchOpen ? "active" : ""}
        onClick={() => setSearchOpen(!searchOpen)}
      >
        <VscSearch style={{ verticalAlign: "-2px", marginRight: "5px" }} />
        <span style={{ opacity: 0.4 }}>Search &amp; Query</span>
        <div
          style={{
            position: "absolute",
            right: "10px",
            top: "5px",
            color: "#999",
            fontSize: "12px",
          }}
        >
          <CmdK />
        </div>

        {searchOpen && (
          <div className="menu" style={{ width: "100%" }}>
            <ul>
              <hr />
              <div style={{ padding: "5px 15px" }}>
                <div className="filters">
                  <div className="group">
                    <button className="selected">Search New Relic One</button>
                    <button>Query Builder</button>
                    <button>Data Explorer</button>
                  </div>
                </div>
              </div>
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
      {/* 
    <button>
      <VscChromeMaximize
        style={{ verticalAlign: "-2px", marginRight: "5px" }}
      />
      Maximize
    </button>
    */}
      <button
        className={accountOpen ? "active" : ""}
        onClick={() => setAccountOpen(!accountOpen)}
      >
        Account: Sunstone Staging{" "}
        <VscChevronDown style={{ verticalAlign: "-2px" }} />
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
      <button
        className={userOpen ? "active" : ""}
        onClick={() => setUserOpen(!userOpen)}
      >
        <img src="https://i.imgur.com/jSrZwhT.jpg" />
        <VscChevronDown style={{ verticalAlign: "-2px" }} />
        {userOpen && (
          <div className="menu">
            <ul>
              <li>User preferences</li>
              <li>API keys</li>
              <li>Manage your plan</li>
              <hr />
              <li>Account settings</li>
              <hr />
              <li>Theme</li>
              <li>NRQL console</li>
              <hr />
              <li>Add more data</li>
              <li>Manage your data</li>
              <li>View your usage</li>
              <hr />
              <li>Support</li>
              <hr />
              <li style={{ color: "#c00" }}>Logout</li>
            </ul>
          </div>
        )}
      </button>
      <button
        className={shareOpen ? "active" : ""}
        onClick={() => setShareOpen(!shareOpen)}
      >
        <FiShare2 style={{ verticalAlign: "-2px", marginRight: "5px" }} />
        Share
        {shareOpen && (
          <div className="menu">
            <ul>
              <li>
                <VscCopy />
                Copy permalink
              </li>
              <li>
                <VscMail />
                Share via Email
              </li>
              <li>
                <BsSlack />
                Share to Slack
              </li>
              <li>
                <SiMicrosoftteams />
                Share to MS Teams
              </li>
              <li>
                <SiJirasoftware />
                Create Jira Ticket
              </li>
            </ul>
          </div>
        )}
      </button>
      <button
        className={
          props.commentsState === "open"
            ? "comment-button active"
            : "comment-button"
        }
        onClick={() =>
          props.commentsState === "closed"
            ? props.setCommentsState("open")
            : props.setCommentsState("closed")
        }
      >
        {location.pathname.endsWith("browse-data") ? (
          <Badge>5</Badge>
        ) : location.pathname.endsWith("dashboards") ? (
          <Badge>6</Badge>
        ) : (
          <FiMessageSquare
            style={{ verticalAlign: "-2px", marginRight: "5px" }}
          />
        )}
        Commments
      </button>
    </div>
  );
};

export default function App() {
  const [commentsState, setCommentsState] = React.useState("closed");

  return (
    <Router>
      <div className="page">
        <Nav
          setCommentsState={setCommentsState}
          commentsState={commentsState}
        />
        <div className="body">
          <Header
            commentsState={commentsState}
            setCommentsState={setCommentsState}
          />
          <div
            style={{
              paddingRight: commentsState === "open" ? "300px" : "0",
              position: "relative",
              transition: "padding-right 0.2s",
            }}
          >
            <Switch>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/explorer">
                <Explorer />
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
              <Route path="/messages">
                <Messages setCommentsState={setCommentsState} />
              </Route>
              <Route path="/mobile">
                <Mobile />
              </Route>
            </Switch>
          </div>
          <Comments
            setCommentsState={setCommentsState}
            commentsState={commentsState}
            offScreen={commentsState == "closed"}
          />
        </div>
      </div>
    </Router>
  );
}
