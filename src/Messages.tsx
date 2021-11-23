import React from "react";
import { useHistory } from "react-router-dom";
import { Content, Title } from "./App";
import { VscSearch, VscWarning, VscMention, VscAdd } from "react-icons/vsc";

export const Square = (props: any) => {
  return <div className="square" style={{ backgroundColor: props.color }} />;
};

export const Unread = (props: any) => {
  return <div className="unread" />;
};

export const Messages = (props: any) => {
  const history = useHistory();

  function handleClick() {
    history.push("/explorer");
    props.setCommentsOn(true);
  }
  function handleClick2() {
    history.push("/alerts--ai");
    props.setCommentsOn(true);
  }

  const [view, setView] = React.useState("all");
  return (
    <Content>
      <Title>Messages </Title>
      <div className="filters">
        <div className="group">
          <button
            className={view === "all" ? "selected" : ""}
            onClick={() => setView("all")}
          >
            View All
          </button>
          <button
            className={view === "following" ? "selected" : ""}
            onClick={() => setView("following")}
          >
            Following
          </button>
          <button
            className={view === "unread" ? "selected" : ""}
            onClick={() => setView("unread")}
          >
            Unread
          </button>
          <button
            className={view === "open" ? "selected" : ""}
            onClick={() => setView("open")}
          >
            Open
          </button>
          <button
            className={view === "closed" ? "selected" : ""}
            onClick={() => setView("closed")}
          >
            Closed
          </button>
          <button
            className={view === "mentions" ? "selected" : ""}
            onClick={() => setView("mentions")}
          >
            Mentions
          </button>
        </div>
        <button>
          <VscSearch />
          Search Messages
        </button>
        <button className="primary right">
          <VscAdd />
          New Message
        </button>
      </div>
      <table className="messages">
        <thead>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr onClick={handleClick}>
            <td>
              <Unread />
            </td>
            <td>Bill Staples</td>
            <td>
              Hosts / <Square color="green" />
              pd-mailin-10-101-0-230.codestream.us
              <span className="subtle">
                This is the same problem as the last time we checked it
              </span>
            </td>
            <td>
              <div className="open">OPEN</div>
            </td>
            <td>Nov 2</td>
          </tr>
          <tr onClick={handleClick2}>
            <td></td>
            <td>Mick Jaggar</td>
            <td>
              <VscWarning style={{ verticalAlign: "-2px" }} /> Alert Service -
              Production violated Response Time 95th
              <span className="subtle">
                Looks like we have a real issue here
              </span>
            </td>
            <td>
              <div className="open">OPEN</div>
            </td>
            <td>Nov 1</td>
          </tr>
          <tr>
            <td style={{ position: "relative" }}>
              <div className="unread-mention">
                <VscMention />
              </div>
            </td>
            <td>Donald Knuth</td>
            <td>
              Hosts / <Square color="red" />
              pd-api-20-101-0-237.codestream.us
              <span className="subtle">Spooky!</span>
            </td>
            <td>
              <div className="closed">CLOSED</div>
            </td>
            <td>Oct 31</td>
          </tr>
          <tr>
            <td>
              <Unread />
            </td>
            <td>Lew Cirne</td>
            <td>
              API Gateway APIs / <Square color="green" />
              demotronLoggin_gateway_api
            </td>
            <td>
              <div className="closed">CLOSED</div>
            </td>
            <td>Oct 27</td>
          </tr>
          <tr>
            <td></td>
            <td>Larry Wall</td>
            <td>
              Workloads / <Square color="gray" />
              Demo Workload - bgomes
              <span className="subtle">
                Are we sure this problem isn't related to the one where we had
                fourteen different services all running at the same time?
              </span>
            </td>
            <td>
              <div className="open">OPEN</div>
            </td>
            <td>Oct 26</td>
          </tr>
        </tbody>
      </table>
    </Content>
  );
};
