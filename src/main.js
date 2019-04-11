import "./styles/main.pcss";
import "./scripts/skills";
import "./scripts/works";
import "./scripts/comments";
import "./scripts/parallax";
import "./scripts/scroll";
import "./scripts/menu";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}