import { useLocation } from "react-router-dom";
import "./App.css";
import Helmet from "react-helmet";
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
} from "react-icons/vsc";
import { MdOutlineBubbleChart, MdOutlineWbSunny } from "react-icons/md";
import { CgScreen, CgSoftwareDownload } from "react-icons/cg";

import { BsClock, BsHexagon, BsSlack, BsStar } from "react-icons/bs";
import { SiJirasoftware, SiMicrosoftteams } from "react-icons/si";

import {
  FiShare2,
  FiUserPlus,
  FiMessageSquare,
  FiChevronRight,
  FiChevronLeft,
} from "react-icons/fi";

import React, { ChangeEvent } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import { Messages, Square, Unread } from "./Messages";
import { Comments } from "./Comments";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export const Content = (props: any) => {
  return (
    <div
      onClick={props.onClick}
      className={"content " + (props.className || "")}
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
  return (
    <div className="plugin">
      <div className="plugin-icon">
        <img src={plugin.icon} />
      </div>
      <div className="plugin-title">{plugin.title}</div>
      <div className="plugin-body">{plugin.body}</div>
      <div className="plugin-author">{plugin.author}</div>
    </div>
  );
};

const Plugins = (props: any) => {
  const [scrolled, setScrolled] = React.useState(false);
  const query = (props.q || "").toLocaleLowerCase();
  const plugins = (props.plugins || []).filter((p: any) => {
    return (
      !query ||
      p.title.toLocaleLowerCase().includes(query) ||
      p.body.toLocaleLowerCase().includes(query)
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
          <Plugin plugin={p} />
        ))}
        {!query && plugins.map((p: any) => <Plugin plugin={p} />)}
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
  popular: [],
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
    {
      title: "",
      icon: "",
      body: "",
    },
  ],
};

const CATEGORIES = [
  "Application monitoring",
  "Infrastructure & OS",
  "Browser & mobile",
  "Simulate Traffic",
  "Logging",
  "Kubernetes & Containers",
  "Amazon Web Services",
  "Azure",
  "Google Cloud Platform",
  "Open source monitoring",
  "Machine learning ops",
  "Notifications",
];

const Category = (props: any) => {
  return (
    <div className="category" onClick={props.onClick}>
      {props.children}
    </div>
  );
};
const Setup = (props: any) => {
  const [hide, setHide] = React.useState(false);
  const [query, setQuery] = React.useState("");
  return (
    <Content>
      {!hide && (
        <>
          <Title
            className="compact"
            buttons={<span onClick={() => setHide(!hide)}>hide</span>}
          >
            Getting Started
          </Title>
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
        </>
      )}
      <div style={{ height: "50px" }} />
      <Title className="compact centered">Add Your Data to New Relic</Title>
      <div className="subtle centered search-description">
        Browse pre-built resources to get you started or improve how you monitor
        your environment. Install visualizations, apps, or quickstarts filled
        with resources like dashboards, instrumentation, and alerts.
      </div>
      <Search
        className="half-width"
        autoFocus
        placeholder="Search for any environment or data source"
        value={query}
        onChange={(q: string) => setQuery(q)}
      />
      <Plugins
        title="Installed"
        className="installed"
        plugins={PLUGINS.installed}
        q={query}
      />
      <Plugins title="Recommended" plugins={PLUGINS.recommended} q={query} />
      <Plugins title="Featured" plugins={PLUGINS.featured} q={query} />
      <Plugins title="Trending" plugins={PLUGINS.trending} q={query} />
      <Plugins title="Most Popular" plugins={PLUGINS.popular} q={query} />
      <Plugins title="Recently Added" plugins={PLUGINS.recent} q={query} />
      <Plugins title="APM" plugins={PLUGINS.apm} q={query} />
      <Plugins title="Infrastructure &amp; OS" q={query} />
      <Plugins title="Browser &amp; Mobile" q={query} />
      <SubTitle>Filter by Category</SubTitle>
      <div className="categories">
        {CATEGORIES.map((category: any) => {
          return (
            <Category onClick={() => setQuery(category)}>{category}</Category>
          );
        })}
      </div>
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
      <br />
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

const Timepicker = (props: any) => {
  const [timeOpen, setTimeOpen] = React.useState(false);
  return (
    <button
      className={`rounded secondary ${timeOpen ? "active" : ""}`}
      style={{ margin: "0 0 0 10px" }}
      onClick={() => setTimeOpen(!timeOpen)}
    >
      <BsClock />
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
  const [view, setView] = React.useState<string>("list");
  const subtitle = props.subtitle || "All";

  if (view === "list" || view === "navigator" || view === "lookout") {
    return (
      <Content className="has-third-nav">
        <ThirdNav items={NAV_EXPLORER} subdir="/explorer/" />
        <Title
          className="compactX"
          buttonsX={[
            <button className="primary round">Create a workload</button>,
          ]}
        >
          Explorer / {subtitle}
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
          <Timepicker />
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
            style={{ margin: 0 }}
            title="Disabled. Enter a filter to save."
          >
            Save as view
          </button>
        </div>
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
        <br />
        <br />
        {view === "list" && <List setView={setView} />}
        {view === "navigator" && <Navigator />}
      </Content>
    );
  } else {
    return (
      <Content className="has-third-nav">
        <ThirdNav items={NAV_EXPLORER} subdir="/explorer/" />
        <Title
          className="compactX"
          buttonsX={[
            <button className="primary round">Create a workload</button>,
          ]}
        >
          Explorer / Services - APM /
          <Square color="green" />
          {view}
          <VscChevronDown />
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
          <Timepicker />
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
            style={{ margin: 0 }}
            title="Disabled. Enter a filter to save."
          >
            Save as view
          </button>
        </div>
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
        <br />
        <br />
        {view === "list" && <List />}
        {view === "navigator" && <Navigator />}
      </Content>
    );
  }
};

const Star = (props: any) => {
  return <VscStarEmpty />;
};

const List = (props: any) => {
  const handleClick = (view: string) => props.setView(view);
  return (
    <>
      <div className="box">
        <SubTitle>
          <VscChevronDown /> Services - APM
        </SubTitle>
        <table className="messages explorer">
          <thead>
            <tr>
              <td></td>
              <td>Name</td>
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
            <tr onClick={() => handleClick("FoodMe")}>
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
              <td>...</td>
            </tr>
            <tr onClick={() => handleClick("Kafka-admin (perf)")}>
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
              <td>3%</td>
              <td>...</td>
            </tr>
            <tr onClick={() => handleClick("Kafka-admin (stg-deep-tree)")}>
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
              <td>3%</td>
              <td>...</td>
            </tr>
            <tr onClick={() => handleClick("Kafka-admin (stg-tree)")}>
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
              <td>...</td>
            </tr>
            <tr onClick={() => handleClick("kafka-admin (stg-showy-brain)")}>
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
              <td>3%</td>
              <td>...</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="box">
        <SubTitle>
          <VscChevronDown /> Hosts
        </SubTitle>
        <table className="messages explorer">
          <thead>
            <tr>
              <td></td>
              <td>Name</td>
              <td>Account</td>
              <td>Provider</td>
              <td>Response</td>
              <td>Throughput</td>
              <td>Errors</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr
              onClick={() =>
                handleClick("pd-mailin-10-101-0-230.codestream.us")
              }
            >
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
              <td>...</td>
            </tr>
            <tr
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
              <td>...</td>
            </tr>
            <tr
              onClick={() => handleClick("pd-api-20-101-0-237.codestream.us")}
            >
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
              <td>...</td>
            </tr>
            <tr
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
              <td>...</td>
            </tr>
            <tr
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
              <td>...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

const DashboardsTable = (props: any) => {
  const handleClick = () => props.setView("dashboard");
  return (
    <div className="box">
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
    </div>
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

const APM = (props: any) => {
  return (
    <Content>
      <Title>APM</Title>
      <div className="placeholder">APM goes here</div>
    </Content>
  );
};

const Infrastructure = (props: any) => {
  return (
    <Content>
      <Title>Infrastructure</Title>
      <div className="placeholder">Infrastructure goes here</div>
    </Content>
  );
};

const Synthetics = (props: any) => {
  const [view, setView] = React.useState<string>("list");
  return (
    <Content className="has-third-nav">
      <ThirdNav items={NAV_SYNTHETICS} subdir="/synthetics/" />
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
      <div className="placeholder">Browser goes here</div>
    </Content>
  );
};

const Mobile = (props: any) => {
  return (
    <Content>
      <Title>Mobile</Title>
      <div className="placeholder">Mobile goes here</div>
    </Content>
  );
  // <img src="https://i.imgur.com/FVcAiJC.png" style={{ width: "100%" }} />
};

const Alerts = (props: any) => {
  return (
    <Content className="has-third-nav">
      <ThirdNav items={NAV_ALERTS} subdir="/alerts--ai/" />
      <Title>Alerts &amp; AI</Title>
      <div className="placeholder">Alerts &amp; AI goes here</div>
    </Content>
  );
  // <img src="https://i.imgur.com/mIZAU3v.png" style={{ width: "100%" }} />
};

const Logs = (props: any) => {
  return (
    <Content className="has-third-nav">
      <ThirdNav items={NAV_LOGS} subdir="/logs/" />
      <Title>Logs</Title>
      <div className="placeholder">Logs goes here</div>
    </Content>
  );
  // <img src="https://i.imgur.com/g0St7AZ.png" style={{ width: "100%" }} />
};

const BrowseData = (props: any) => {
  return (
    <Content className="has-third-nav">
      <ThirdNav items={NAV_BROWSE} subdir="/browse-data/" />
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

const Dashboards = (props: any) => {
  const [view, setView] = React.useState("list");
  if (view === "dashboard") {
    return (
      <Content className="has-third-nav">
        <ThirdNav items={NAV_DASHBOARD} subdir="/dashboards/" />
        <Title
          buttons={
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Timepicker />
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
          Dashboards / Adobe User Engagement Export
        </Title>
        <img src="https://i.imgur.com/nQhZTwi.png" style={{ width: "100%" }} />
      </Content>
    );
  } else {
    return (
      <Content className="has-third-nav">
        <ThirdNav items={NAV_DASHBOARD} subdir="/dashboards/" />
        <Title
          buttons={
            <>
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
            </>
          }
        >
          Dashboards
        </Title>
        <div style={{ margin: "-5px 0 15px 0" }}>
          <Search placeholder="Filter by name, type,tags... (e.g. entityType = Host)" />
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

const CmdK = (props: any) => {
  return <div className="keybinding">⌘ K</div>;
};

const NAV_BROWSE = [
  { label: "Events", isDefault: true },
  { label: "Metrics" },
  { label: "Logs" },
  { label: "Traces" },
];

const NAV_DASHBOARD = [
  { label: "All", icon: <VscFeedback />, isDefault: true },
  { label: "Last", icon: <MdOutlineWbSunny /> },
  { label: "Favorites", icon: <VscQuestion /> },
  { label: "Saved", icon: <FiUserPlus /> },
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
  { label: "-Customize this list" },
];

const NAV_ALERTS = [
  { label: "Overview", isDefault: true },
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
  { label: "All", icon: <VscFeedback />, isDefault: true },
  { label: "Last", icon: <MdOutlineWbSunny /> },
  { label: "Favorites", icon: <VscQuestion /> },
  { label: "Saved", icon: <FiUserPlus /> },
  { label: "Gaps", icon: <FiUserPlus /> },
  { label: "Your system", icon: <FiUserPlus /> },
  { label: "Other entities", icon: <FiUserPlus /> },
  { label: "Synthetics", icon: <FiUserPlus /> },
  { label: "Kubernetes", icon: <FiUserPlus /> },
  { label: "AWS", icon: <FiUserPlus /> },
  { label: "Azure", icon: <FiUserPlus /> },
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

const NAV_LOGS = [
  { label: "All", icon: <VscQuestion />, isDefault: true },
  { label: "Attributes", icon: <MdOutlineWbSunny /> },
  { label: "Patterns", icon: <VscFeedback /> },
  { label: "Livetail", icon: <FiUserPlus /> },
  { label: "Query", icon: <FiUserPlus /> },
  { label: "Drop Filters", icon: <FiUserPlus /> },
  { label: "Parsing", icon: <FiUserPlus /> },
  { label: "Data partitions", icon: <FiUserPlus /> },
  { label: "Create alert condition", icon: <FiUserPlus /> },
  { label: "Create drop filter", icon: <FiUserPlus /> },
];

const NAV = [
  //   { label: "Search", icon: <VscSearch />, hover: <CmdK /> },
  { label: "Setup", icon: <VscSettingsGear /> },
  {
    label: "Explorer",
    icon: <VscGlobe />,
    extra: <VscChevronDown />,
    hover: "",
    hasThirdNav: true,
    subdir: "/explorer/",
    subnav: NAV_EXPLORER,
  },
  {
    label: "Browse Data",
    icon: <VscCompass />,
    extra: <VscChevronDown />,
    hasThirdNav: true,
    subnav: NAV_BROWSE,
    subdir: "/browse-data/",
  },
  {
    label: "Dashboards",
    icon: <VscDashboard />,
    extra: <VscChevronDown />,
    hasThirdNav: true,
    subdir: "/dashboards/",
    subnav: NAV_DASHBOARD,
  },
  {
    label: "Alerts & AI",
    icon: <VscWarning />,
    extra: <VscChevronDown />,
    subnav: NAV_ALERTS,
    hasThirdNav: true,
    subdir: "/alerts--ai/",
  },
  { label: "Errors Inbox", icon: <VscInbox /> },
  { label: "APM", icon: <VscGraphLine />, extra: <VscChevronDown /> },
  { label: "Browser", icon: <VscBrowser />, extra: <VscChevronDown /> },
  { label: "Infrastructure", icon: <VscServer />, extra: <VscChevronDown /> },
  {
    label: "Logs",
    icon: <VscListFlat />,
    hasThirdNav: true,
    extra: <VscChevronDown />,
    subdir: "/logs/",
    subnav: NAV_LOGS,
  },
  { label: "Mobile", icon: <VscDeviceMobile />, extra: <VscChevronDown /> },
  {
    label: "Synthetics",
    icon: <VscGithubAction />,
    extra: <VscChevronDown />,
    hasThirdNav: true,
    subdir: "/synthetics",
    subnav: NAV_SYNTHETICS,
  },
  {
    label: "Messages",
    labelDiv: (
      <span>
        Messages<span style={{ padding: "0 8px" }}> </span>
      </span>
    ),
    icon: <VscCommentDiscussion />,
    badge: <Badge>3</Badge>,
    noComment: true,
  },
  {
    label: "More",
    icon: <VscEllipsis />,
    subnav: NAV_MORE,
  },
];

const NAV_BOTTOM = [
  { label: "Help", icon: <VscQuestion /> },
  { label: "What's New", icon: <MdOutlineWbSunny /> },
  { label: "Feedback", icon: <VscFeedback />, subnav: NAV_FEEDBACK },
  { label: "Invite", icon: <FiUserPlus /> },
];

export const ThirdNav = (props: { items: any[]; subdir?: string }) => {
  return (
    <ul className="links thirdnav subnav">
      {props.items.map((item) => (
        <NavItem item={item} subdir={props.subdir} />
      ))}
    </ul>
  );
};

export const Menu = (props: { items: any[]; subdir?: string }) => {
  return (
    <ul className="links submenu">
      {props.items.map((item) => (
        <NavItem item={item} subdir={props.subdir} />
      ))}
    </ul>
  );
};

const NavItem = (props: any) => {
  const item = props.item;
  if (item.label.startsWith("-")) {
    return <div className="sep">{item.label.replace("-", "")}</div>;
  }
  const to = item.isDefault
    ? props.subdir
    : (props.subdir || "/") +
      (item.url ||
        item.label
          .toLocaleLowerCase()
          .replace(" ", "-")
          .replace(" ", "-")
          .replace("&", ""));

  return (
    <li>
      <NavLink
        to={to}
        exact={item.isDefault}
        activeClassName="active"
        onClick={(e) => {
          if (item.onClick) {
            item.onClick();
            e.stopPropagation();
            e.preventDefault();
            return false;
          }
          if (item.noComment) props.setCommentsState("closed");
        }}
        className={item.hasThirdNav ? "has-third-nav" : ""}
      >
        {item.icon} <span className="label">{item.labelDiv || item.label}</span>
        <span className="extra">{item.extra}</span>
        {item.badge && item.badge}
        {item.subnav && (
          <span className={"hover"}>
            <Menu items={item.subnav} subdir={item.subdir} />
          </span>
        )}
      </NavLink>
    </li>
  );
};

const Nav = (props: any) => {
  return (
    <div className="nav">
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
      <div
        className="logo-wrap"
        onClick={() =>
          props.setNavState(
            props.navState == "normal"
              ? "collapsed"
              : props.navState == "collapsed"
              ? "hidden"
              : props.navState == "hidden"
              ? "horizontal"
              : "normal"
          )
        }
      >
        <div className="logo">
          {/*<VscArrowUp className="icon icon-up" />*/}
          <img className="logo-svg" src={logo} alt="logo" />
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
          onClick={() => props.setNavState("horizontal")}
        />
      )}
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
          {NAV_BOTTOM.map((item) => (
            <NavItem
              item={item}
              setCommentsState={props.setCommentsState}
              commentsState={props.commentsState}
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

  return (
    <div className="header">
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

      <button
        className={searchOpen ? "active search-button" : "search-button"}
        onClick={() => setSearchOpen(!searchOpen)}
      >
        <label>
          <VscSearch style={{ verticalAlign: "-2px", marginRight: "5px" }} />
          <span>Search &amp; Query</span>
          <div className="search-shortcut">
            <CmdK />
          </div>
        </label>
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
      <button
        className={userOpen ? "active" : ""}
        onClick={() => setUserOpen(!userOpen)}
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
              <li style={{ color: "#c00" }}>Logout</li>
            </ul>
          </div>
        )}
      </button>
      <button
        className={shareOpen ? "active" : ""}
        onClick={() => setShareOpen(!shareOpen)}
      >
        <label>
          <FiShare2 style={{ verticalAlign: "-2px", marginRight: "5px" }} />
          Share
        </label>
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
          <Badge className={color}>5</Badge>
        ) : location.pathname.endsWith("dashboards") ? (
          <Badge className={color}>6</Badge>
        ) : location.pathname.endsWith("apm") ? (
          <Badge className={color}>6</Badge>
        ) : location.pathname.endsWith("mobile") ? (
          <Badge className={color}>4</Badge>
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

const USERSNAP_GLOBAL_API_KEY = "890302de-964c-40fc-bde6-458b2c3f709e";
const USERSNAP_API_KEY = "829c6c2b-293d-4dc1-8863-6df644dbfd09";

export default function App() {
  const [commentsState, setCommentsState] = React.useState("closed");
  const [theme, setTheme] = React.useState("dark");
  const [navState, setNavState] = React.useState<
    "normal" | "collapsed" | "hidden" | "horizontal"
  >("horizontal");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
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
        <div className={`page ${navState} ${theme}`}>
          <Nav
            setCommentsState={setCommentsState}
            commentsState={commentsState}
            setNavState={setNavState}
            navState={navState}
          />
          <div className="body">
            <Header
              toggleTheme={toggleTheme}
              commentsState={commentsState}
              setCommentsState={setCommentsState}
              navState={navState}
            />
            <div
              style={{
                paddingRight: commentsState === "open" ? "300px" : "0",
                position: "relative",
                transition: "padding-right 0.2s",
              }}
            >
              <Switch>
                <Route exact path="/setup">
                  <Setup />
                </Route>
                <Route path="/explorer/last">
                  <Explorer subtitle="Last" />
                </Route>
                <Route path="/explorer/favorites">
                  <Explorer subtitle="Favorites" />
                </Route>
                <Route path="/explorer/saved">
                  <Explorer subtitle="Saved" />
                </Route>
                <Route path="/explorer/gaps">
                  <Explorer subtitle="Gaps" />
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
                <Route exact path="/nrx/setup">
                  <Setup />
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
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}
