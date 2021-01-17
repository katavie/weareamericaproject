/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import slugify from "../../utils/slugify"

const StoryCard = props => (
  <article
    sx={{
      mb: "30px",
      ":hover img": {
        transform: "scale(1.1)",
      },
    }}
  >
    <Link
      to={`/story/${slugify(props.author)}`}
      sx={{
        textDecoration: "none",
      }}
    >
      <div
        className="image-wrapper"
        sx={{
          overflow: "hidden",
        }}
      >
        <img
          src={props.photoUrl}
          alt={"Photo of " + props.author}
          sx={{
            maxWidth: "100%",
            m: "0",
            transition: ".15s",
            position: "relative",
            zIndex: "-1",
            display: "block",
          }}
        />
      </div>

      <div
        sx={{
          bg: "background",
          overflow: "hidden",
          p: ".75rem 1rem",
        }}
      >
        <h3
          sx={{
            fontFamily: "heading",
            color: "text",
            m: "0",
            fontSize: "1.5rem",
            display: "inline-block",
            lineHeight: 1.25,
          }}
        >
          {props.title}
        </h3>

        <h4
          sx={{
            fontFamily: "heading",
            color: "muted",
            margin: "0",
            fontSize: "1.25rem",
          }}
        >
          {props.author}
        </h4>
      </div>
    </Link>
  </article>
)

export default StoryCard
