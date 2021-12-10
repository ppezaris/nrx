import React from "react";
import { Badge } from "./App";
import {
  VscChevronDown,
  VscChromeClose,
  VscLink,
  VscLinkExternal,
  VscPin,
  VscPinned,
  VscSmiley,
} from "react-icons/vsc";
import { BsClock, BsSlack } from "react-icons/bs";
import { NavLink, useLocation } from "react-router-dom";
import { RiSendPlane2Line } from "react-icons/ri";
import { SiJirasoftware } from "react-icons/si";
import Draggable from "react-draggable";
import { IoIosAttach } from "react-icons/io";
import { GoMention } from "react-icons/go";
import { BsMarkdown } from "react-icons/bs";

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
  "/alerts--ai": "Alerts & AI",
  "/errors-inbox": "Errors Inbox",
  "/infrastructure": "Infrastructure",
  "/logs": "Logs",
  "/synthetics": "Synthetics",
  "/messages": "Messages",
  "/nrx/mobile": "Mobile",
  "/nrx/browser": "Browser",
  "/nrx/apm": "APM",
  "/nrx/home": "Home",
  "/nrx/explorer": "Explorer",
  "/nrx/browse-data": "Browse Data",
  "/nrx/dashboards": "Dashboards",
  "/nrx/alerts--ai": "Alerts & AI",
  "/nrx/errors-inbox": "Errors Inbox",
  "/nrx/infrastructure": "Infrastructure",
  "/nrx/logs": "Logs",
  "/nrx/synthetics": "Synthetics",
  "/nrx/messages": "Messages",
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
    { date: "Nov 20, 3:22pm et" },
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
    { date: "Dec 1, 4:34pm et" },
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
  apm: [
    {
      headshot: "https://i.imgur.com/jSrZwhT.jpg",
      pinned: true,
      body: (
        <>
          <div style={{ position: "absolute", top: "-10px", right: "0" }}>
            <VscPinned />
          </div>
          Runbook for this app lives <span className="mention">here</span>
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
      headshot: "https://i.imgur.com/jSrZwhT.jpg",
      reply: true,
      body: <>I don't think so.</>,
    },
    { newline: true },
    {
      headshot: "https://i.imgur.com/jSrZwhT.jpg",
      body: <>What happened to the workload it used to be a part of?</>,
    },
    {
      headshot: "https://i.imgur.com/1xDVxPQ.png",
      body: <>This is the same problem as the last time we checked it</>,
    },
  ],
};

export const Comment = (props: any) => {
  let className = props.pinned ? "pinned" : props.reply ? "reply" : "";
  if (!props.headshot) className += " no-headshot";
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
      {props.headshot && <img className="headshot" src={props.headshot} />}
      {/*<div className="author">
        Peter Pezaris <span className="subtle">2:30 PM</span>
  </div>*/}
      <div className="comment-body">
        <div
          style={{
            position: "absolute",
            top: "-10px",
            right: "0",
          }}
        >
          {props.timed && <BsClock />}
          {props.pinned ? (
            <VscPinned className="pin" />
          ) : (
            <VscPin className="pin unpinned" />
          )}
        </div>
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

  const addComment = (str: string) => {
    if (str) {
      const newText = str.endsWith("mobile") ? (
        <>
          <img src="https://i.imgur.com/FVcAiJC.png" />
          <NavLink to="/mobile">{str}</NavLink>
        </>
      ) : (
        <span>{str}</span>
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

  return (
    <>
      {props.resolved && (
        <Comment
          body={
            <div
              onClick={() =>
                props.setResolved({
                  ...props.resolved,
                  // @ts-ignore
                  [props.commentThread]: false,
                })
              }
            >
              <Badge>5</Badge>
              Thread{" "}
              <div className="closed" style={{ cursor: "pointer" }}>
                CLOSED
              </div>{" "}
              on 12/12/21 by <span className="mention">@pez</span>{" "}
            </div>
          }
        ></Comment>
      )}

      {props.existingComments.map((comment: any) => (
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
                props.resolved ? "Start a new thread..." : "Add a comment..."
              }
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <div className="comment-attachments">
              <BsMarkdown title="Markdown Help" />{" "}
              <GoMention title="Mention a teammate" />{" "}
              <VscSmiley title="Emoji" />{" "}
              <VscLink
                title="Link to current page"
                onClick={() => addComment("/mobile")}
              />{" "}
              <BsClock title="Commont on a point in time" />
              <IoIosAttach title="Attach a file" />
              <div
                className={`primary right ${text ? "active" : "disabled"}`}
                onClick={() => addComment(text)}
                style={{ marginLeft: "auto" }}
              >
                <RiSendPlane2Line />
              </div>
            </div>
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
          marginTop: "-0px",
          paddingRight: "10px",
          paddingLeft: "55px",
          display: "flex",
        }}
      >
        {/*} <VscMarkdown /> <VscMention /> <VscSmiley /> <FiPaperclip /> */}
        {/*existingComments.length > 0 && (
          <button
            className={(menuOpen ? "active " : "") + color}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {threadState == "open" ? "Open" : "Closed"}
            <VscChevronDown
              style={{ verticalAlign: "-2px", marginLeft: "5px" }}
            />
            {menuOpen && (
              <div className="menu" style={{ width: "100%" }}>
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
                  <li>Export Thread</li>
                  <hr />
                  <li>Archive Thread</li>
                </ul>
              </div>
            )}
          </button>
                  )*/}

        {/*        <button
          className={`primary right ${text ? "" : "disabled"}`}
          onClick={addComment}
        >
          Comment
</button>*/}
      </div>
      <br />
      <br />
    </>
  );
};

export const Comments = (props: any) => {
  const [pinned, setPinned] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const { resolved, setResolved, commentThread, threadState, pathname } = props;

  // @ts-ignore
  const commentsInDB = COMMENTS[commentThread] || [];

  const existingComments = resolved[commentThread] ? [] : commentsInDB;

  const color = threadState == "open" ? "green" : "purple";

  // @ts-ignore
  const title = props.commentsState === "float" ? TITLES[pathname] + " " : "";
  const position = props.commentsState === "float" ? undefined : { x: 0, y: 0 };
  return (
    <Draggable handle=".float .comments-header" position={position}>
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
          <div style={{ paddingLeft: "20px" }}>
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
            {commentsInDB.length > 0 && (
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
                            [commentThread]:
                              threadState == "open" ? "closed" : undefined,
                          })
                        }
                      >
                        {threadState == "open" ? "Resolve" : "Reopen"}
                      </li>
                      <hr />
                      <li
                        onClick={() =>
                          alert(
                            "Not implemented. Would create a google doc from the thread as an instant-retro."
                          )
                        }
                      >
                        Export
                      </li>
                      <hr />
                      <li
                        onClick={() =>
                          alert(
                            "Not implemented. Would hide the thread completely including on this tab and on the Messages page."
                          )
                        }
                      >
                        Archive
                      </li>
                    </ul>
                  </div>
                )}
              </button>
            )}
            {props.commentsState === "float" ? (
              <VscChromeClose
                style={{ cursor: "pointer", transform: "scale(1.25)" }}
                onClick={() => props.setCommentsState("closed")}
              />
            ) : (
              <VscLinkExternal
                style={{ cursor: "pointer" }}
                onClick={() => props.setCommentsState("float")}
              />
            )}
          </div>
        </div>
        <Thread
          commentThread={commentThread}
          resolved={resolved[commentThread]}
          setResolved={setResolved}
          existingComments={existingComments}
          commentsState={props.commentsState}
        />
      </div>
    </Draggable>
  );
};
