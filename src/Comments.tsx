import React from "react";
import { Content, Title } from "./App";
import {
  VscArrowRight,
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

export const Comment = (props: any) => {
  const className = props.className || "";
  return (
    <div className={"comment " + className}>
      <img className="headshot" src={props.headshot} />
      {/*<div className="author">
        Peter Pezaris <span className="subtle">2:30 PM</span>
  </div>*/}
      <div className="comment-body">{props.children}</div>
    </div>
  );
};

export const MobileThread = (props: any) => {
  return (
    <>
      <Comment className="pinned" headshot="https://i.imgur.com/jSrZwhT.jpg">
        <div style={{ position: "absolute", top: "-10px", right: "0" }}>
          <VscPinned />
        </div>
        Shared to <span className="mention">#mobile</span> on <BsSlack /> Slack
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
          <div>new messages</div>
        </div>
      </div>
      <Comment headshot="https://i.imgur.com/1xDVxPQ.png">
        This is the same problem as the last time we checked it
      </Comment>
      <AddComment />
    </>
  );
};

export const DashboardsThread = (props: any) => {
  return (
    <>
      <Comment className="pinned" headshot="https://i.imgur.com/jSrZwhT.jpg">
        <div style={{ position: "absolute", top: "-10px", right: "0" }}>
          <VscPinned />
        </div>
        Ticket <span className="mention">NR1-3038</span> on <SiJirasoftware />{" "}
        Jira
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
          <div>new messages</div>
        </div>
      </div>
      <Comment headshot="https://i.imgur.com/1xDVxPQ.png">
        This is the same problem as the last time we checked it
      </Comment>
      <AddComment />
    </>
  );
};

export const BrowseDataThread = (props: any) => {
  return (
    <>
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
          <div>new messages</div>
        </div>
      </div>
      <Comment headshot="https://i.imgur.com/1xDVxPQ.png">
        This is the same problem as the last time we checked it
      </Comment>
      <AddComment />
    </>
  );
};

interface Comment {
  headshot: string;
  text: string | JSX.Element;
}

export const AddComment = (props: any) => {
  const [text, setText] = React.useState("");
  const [comments, setComments] = React.useState<Comment[]>([]);

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
          text: newText,
          headshot: "https://i.imgur.com/jSrZwhT.jpg",
        },
      ]);
    }
  };
  return (
    <>
      {comments.map((comment) => {
        return <Comment headshot={comment.headshot}>{comment.text}</Comment>;
      })}
      <Comment headshot="https://i.imgur.com/jSrZwhT.jpg">
        <input
          type="text"
          style={{
            border: "none",
            width: "100%",
            outline: "none",
            margin: "-8px",
            padding: "8px",
          }}
          placeholder="Add a comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div
          className="comment-actions"
          style={{
            fontSize: "14px",
            color: "#888",
            margin: "10px -10px -10px -10px",
            padding: "10px 10px 10px 10px",
            borderTop: "1px solid #eee",
            backgroundColor: "#f8f8f8",
          }}
        >
          <div style={{ float: "right" }}>
            <RiSendPlane2Line onClick={addComment} />
          </div>
          <VscMarkdown /> <VscMention /> <VscSmiley /> <FiPaperclip />
        </div>
      </Comment>
    </>
  );
};
export const Thread = (props: any) => {
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
          <div>new messages</div>
        </div>
      </div>
      <Comment headshot="https://i.imgur.com/1xDVxPQ.png">
        This is the same problem as the last time we checked it
      </Comment>
      <AddComment />
    </>
  );
};

export const Comments = (props: any) => {
  const location = useLocation();
  const [pinned, setPinned] = React.useState(false);
  const [pathname, setPathname] = React.useState(location.pathname);
  React.useEffect(() => {
    if (props.commentsState === "open") setPathname(location.pathname);
  }, [location.pathname]);

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
      <div style={{ display: "flex", padding: "0 20px" }}>
        <div
          style={{
            display: props.commentsState === "float" ? "block" : "none",
          }}
        >
          {pathname}{" "}
          <span
            style={{ fontSize: "15px", verticalAlign: "-3px" }}
            onClick={() => setPinned(!pinned)}
          >
            {/*pinned ? <VscPinned /> : <VscPin />*/}
          </span>
        </div>
        <div style={{ marginLeft: "auto" }}>
          {" "}
          <VscChromeClose
            onClick={() => props.setCommentsState("closed")}
          />{" "}
          <VscLinkExternal
            onClick={() =>
              props.commentsState === "float"
                ? props.setCommentsState("open")
                : props.setCommentsState("float")
            }
          />
        </div>
      </div>
      {pathname.endsWith("dashboards") ? (
        <DashboardsThread />
      ) : pathname.endsWith("browse-data") ? (
        <BrowseDataThread />
      ) : pathname.endsWith("mobile") ? (
        <MobileThread />
      ) : pathname.endsWith("mobile") ? (
        <Thread />
      ) : (
        <AddComment />
      )}
    </div>
  );
};
