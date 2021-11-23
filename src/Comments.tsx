import React from "react";
import { Badge, Content, Title } from "./App";
import {
  VscArrowRight,
  VscChevronDown,
  VscChromeClose,
  VscClose,
  VscLinkExternal,
  VscMarkdown,
  VscMention,
  VscPin,
  VscPinned,
  VscSearch,
  VscSmiley,
} from "react-icons/vsc";
import { BsSlack } from "react-icons/bs";
import { NavLink, useLocation } from "react-router-dom";
import { FiPaperclip } from "react-icons/fi";
import { RiSendPlane2Line } from "react-icons/ri";
import { SiJirasoftware } from "react-icons/si";

export const Square = (props: any) => {
  return <div className="square" style={{ backgroundColor: props.color }} />;
};

const TITLES = {
  "/mobile": "Mobile",
  "/browser": "Browser",
  "/apm": "APM",
  "/home": "Home",
  "/explorer": "Explorer",
  "/browse-data": "Browse Data",
  "/dashboards": "Dashboards",
  "/nrx/mobile": "Mobile",
  "/nrx/browser": "Browser",
  "/nrx/apm": "APM",
  "/nrx/home": "Home",
  "/nrx/explorer": "Explorer",
  "/nrx/browse-data": "Browse Data",
  "/nrx/dashboards": "Dashboards",
};

const COMMENTS = {
  mobile: [
    {
      pinned: true,
      headshot: "https://i.imgur.com/jSrZwhT.jpg",
      body: (
        <>
          Shared to <span className="mention">#mobile</span> on <BsSlack />{" "}
          Slack
        </>
      ),
    },
    {
      headshot: "https://i.imgur.com/jSrZwhT.jpg",
      body: (
        <>
          <span className="mention">@sally</span> why are we getting so many
          errors on mobile all of a sudden?
        </>
      ),
    },
    {
      headshot: "https://i.imgur.com/1xDVxPQ.png",
      body: (
        <>
          Perhaps this deployment is the issue?{" "}
          <span style={{ whiteSpace: "nowrap" }} className="mention">
            <Square color="blue"></Square>12/13/83 47fsdfu
          </span>
        </>
      ),
    },
    {
      reply: true,
      headshot: "https://i.imgur.com/jSrZwhT.jpg",
      body: <>Nah, that was just a docs change.</>,
    },
  ],
  browse: [
    {
      headshot: "https://i.imgur.com/jSrZwhT.jpg",
      body: (
        <>
          <span className="mention">@dave</span> any idea what happened here?
          this doesn't look like anything I've seen before. help!
        </>
      ),
    },
    {
      headshot: "https://i.imgur.com/1xDVxPQ.png",
      body: (
        <>
          Could it have something to do with{" "}
          <span style={{ whiteSpace: "nowrap" }} className="mention">
            <Square color="red"></Square>demotron_gateway_api
          </span>
          ?
        </>
      ),
    },
    {
      reply: true,
      headshot: "https://i.imgur.com/jSrZwhT.jpg",
      body: <>I don't think so.</>,
    },
    {
      headshot: "https://i.imgur.com/jSrZwhT.jpg",
      body: <>What happened to the workload it used to be a part of?</>,
    },

    { newline: true },

    {
      headshot: "https://i.imgur.com/1xDVxPQ.png",
      body: <>This is the same problem as the last time we checked it</>,
    },
  ],
  dashboards: [
    {
      pinned: true,
      headshot: "https://i.imgur.com/jSrZwhT.jpg",
      body: (
        <>
          Ticket <span className="mention">NR1-3038</span> on <SiJirasoftware />{" "}
          Jira
        </>
      ),
    },
    {
      headshot: "https://i.imgur.com/jSrZwhT.jpg",
      body: (
        <>
          <span className="mention">@dave</span> any idea what happened here?
          this doesn't look like anything I've seen before. help!
        </>
      ),
    },
    { date: "Nov 22, 7pm et" },
    {
      headshot: "https://i.imgur.com/1xDVxPQ.png",
      body: (
        <>
          Could it have something to do with{" "}
          <span style={{ whiteSpace: "nowrap" }} className="mention">
            <Square color="red"></Square>demotron_gateway_api
          </span>
          ?
        </>
      ),
    },
    {
      reply: true,
      headshot: "https://i.imgur.com/jSrZwhT.jpg",
      body: <>I don't think so.</>,
    },
    {
      headshot: "https://i.imgur.com/jSrZwhT.jpg",
      body: <>What happened to the workload it used to be a part of?</>,
    },
    { newline: true },
    {
      headshot: "https://i.imgur.com/1xDVxPQ.png",
      body: <>This is the same problem as the last time we checked it</>,
    },
  ],
};

export const Comment = (props: any) => {
  const className = props.pinned ? "pinned" : props.reply ? "reply" : "";
  if (props.newline)
    return (
      <div className="new-line">
        <div>
          <div>new</div>
        </div>
      </div>
    );

  if (props.date)
    return (
      <div className="date-line">
        <div>
          <div>{props.date}</div>
        </div>
      </div>
    );

  return (
    <div className={"comment " + className}>
      <img className="headshot" src={props.headshot} />
      {/*<div className="author">
        Peter Pezaris <span className="subtle">2:30 PM</span>
  </div>*/}
      <div className="comment-body">
        {props.pinned && (
          <div
            style={{
              position: "absolute",
              top: "-10px",
              right: "0",
            }}
          >
            <VscPinned />
          </div>
        )}
        {props.body}
      </div>
    </div>
  );
};

interface Comment {
  headshot: string;
  body: string | JSX.Element;
}

export const Thread = (props: any) => {
  const [text, setText] = React.useState("");
  const [comments, setComments] = React.useState<Comment[]>([]);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [resolved, setResolved] = React.useState<{ [foo: string]: any }>({});

  const existingComments = resolved[props.commentThread]
    ? []
    : // @ts-ignore
      COMMENTS[props.commentThread] || [];
  const addComment = () => {
    if (text) {
      const newText = text.endsWith("mobile") ? (
        <>
          <img src="https://i.imgur.com/FVcAiJC.png" />
          <NavLink to="/mobile">http://localhost:3000/mobile</NavLink>
        </>
      ) : (
        <span>{text}</span>
      );
      setText("");
      setComments([
        ...comments,
        {
          body: newText,
          headshot: "https://i.imgur.com/jSrZwhT.jpg",
        },
      ]);
    }
  };
  const threadState =
    resolved[props.commentThread] || resolved[props.commentThread] === false
      ? "closed"
      : "open";

  const color = threadState == "open" ? "green" : "purple";

  return (
    <>
      {resolved[props.commentThread] && (
        <Comment
          headshot="https://i.imgur.com/jSrZwhT.jpg"
          body={
            <div
              onClick={() =>
                setResolved({
                  ...resolved,
                  // @ts-ignore
                  [props.commentThread]: false,
                })
              }
            >
              <Badge>5</Badge>
              Thread resolved on 12/12/21 by{" "}
              <span className="mention">@pez</span>{" "}
            </div>
          }
        ></Comment>
      )}

      {existingComments.map((comment: any) => (
        <Comment {...comment} />
      ))}
      {comments.map((comment) => (
        <Comment {...comment} />
      ))}
      <Comment
        headshot="https://i.imgur.com/jSrZwhT.jpg"
        body={
          <>
            <input
              type="text"
              style={{
                border: "none",
                width: "100%",
                outline: "none",
                margin: "-8px",
                padding: "8px",
              }}
              placeholder={
                resolved[props.commentThread]
                  ? "Start a thread..."
                  : "Add a comment..."
              }
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </>
        }
      ></Comment>
      <div
        className="comment-actions"
        style={{
          // fontSize: "14px",
          // color: "#888",
          // margin: "10px -10px -10px -10px",
          // padding: "10px 0 10px 10px",
          // borderTop: "1px solid #eee",
          // backgroundColor: "#f8f8f8",
          marginTop: "-10px",
          paddingRight: "10px",
          paddingLeft: "55px",
          display: "flex",
        }}
      >
        {/*} <VscMarkdown /> <VscMention /> <VscSmiley /> <FiPaperclip /> */}
        {existingComments.length > 0 && (
          <button
            className={(menuOpen ? "active " : "") + color}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {threadState == "open" ? "Open" : "Closed"}
            <VscChevronDown
              style={{ verticalAlign: "-2px", marginLeft: "5px" }}
            />
            {menuOpen && (
              <div className="menu">
                <ul>
                  <li
                    onClick={() =>
                      setResolved({
                        ...resolved,
                        // @ts-ignore
                        [props.commentThread]:
                          threadState == "open" ? "closed" : undefined,
                      })
                    }
                  >
                    {threadState == "open" ? "Resolve Thread" : "Reopen Thread"}
                  </li>
                  <hr />
                  <li>Archive Thread</li>
                </ul>
              </div>
            )}
          </button>
        )}

        <button
          className={`primary right ${text ? "" : "disabled"}`}
          onClick={addComment}
        >
          Comment
        </button>
      </div>
      <br />
      <br />
    </>
  );
};
export const xThread = (props: any) => {
  return (
    <>
      <Comment className="pinned" headshot="https://i.imgur.com/jSrZwhT.jpg">
        <div style={{ position: "absolute", top: "-10px", right: "0" }}>
          <VscPinned />
        </div>
        Runbook for this app lives <span className="mention">here</span>
      </Comment>
      <Comment headshot="https://i.imgur.com/jSrZwhT.jpg">
        <span className="mention">@dave</span> any idea what happened here? this
        doesn't look like anything I've seen before. help!
      </Comment>
      <Comment headshot="https://i.imgur.com/1xDVxPQ.png">
        Could it have something to do with{" "}
        <span style={{ whiteSpace: "nowrap" }} className="mention">
          <Square color="red"></Square>demotron_gateway_api
        </span>
        ?
      </Comment>
      <Comment className="reply" headshot="https://i.imgur.com/jSrZwhT.jpg">
        I don't think so.
      </Comment>
      <Comment headshot="https://i.imgur.com/jSrZwhT.jpg">
        What happened to the workload it used to be a part of?
      </Comment>
      <div className="new-line">
        <div>
          <div>new</div>
        </div>
      </div>
      <Comment headshot="https://i.imgur.com/1xDVxPQ.png">
        This is the same problem as the last time we checked it
      </Comment>
    </>
  );
};

export const Comments = (props: any) => {
  const location = useLocation();
  const [pinned, setPinned] = React.useState(false);
  const [pathname, setPathname] = React.useState<string>(location.pathname);
  React.useEffect(() => {
    if (props.commentsState === "open") setPathname(location.pathname);
  }, [location.pathname]);

  console.warn("pathname is: ", pathname);
  const commentThread = pathname.endsWith("dashboards")
    ? "dashboards"
    : pathname.endsWith("browse-data")
    ? "browse"
    : pathname.endsWith("mobile")
    ? "mobile"
    : "";

  // @ts-ignore
  const title = TITLES[pathname] || "";
  return (
    <div
      className={
        props.offScreen
          ? "comments off-screen"
          : props.commentsState === "float"
          ? "comments float"
          : "comments"
      }
    >
      <div
        className="comments-header"
        style={{
          display: "flex",
          position: props.commentsState === "float" ? "sticky" : "relative",
          top: 0,
        }}
      >
        <div
          style={{
            display: props.commentsState === "float" ? "block" : "none",
          }}
        >
          {title}{" "}
          <span
            style={{ fontSize: "15px", verticalAlign: "-3px" }}
            onClick={() => setPinned(!pinned)}
          >
            {/*pinned ? <VscPinned /> : <VscPin />*/}
          </span>
        </div>
        <div style={{ marginLeft: "auto" }}>
          {/*          {" "}
          <VscChromeClose
            onClick={() => props.setCommentsState("closed")}
          />{" "}
        */}
          <VscLinkExternal
            style={{ cursor: "pointer" }}
            onClick={() =>
              props.commentsState === "float"
                ? props.setCommentsState("open")
                : props.setCommentsState("float")
            }
          />
        </div>
      </div>
      <Thread
        commentThread={commentThread}
        commentsState={props.commentsState}
      />
    </div>
  );
};
