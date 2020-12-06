/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const FONT_SIZES = {
  small: 1,
  medium: 2,
  large: 3,
}

const ButtonLink = props => (
  <Link
    sx={{
      bg: "accent",
      color: "background",
      display: "inline-block",
      mx: "auto",
      p: ".5em .6em .45em",
      textDecoration: "none",
      fontFamily: "heading",
      fontWeight: "heading",
      fontSize: props.size ? FONT_SIZES[props.size] : 2,
      lineHeight: "100%",
      transition: ".2s",
      borderRadius: "10px",
      appearance: "none",
      cursor: "pointer",
      ":hover": {
        bg: "#422",
      },
    }}
    to={props.destination}
  >
    {props.children}
  </Link>
)

export default ButtonLink
