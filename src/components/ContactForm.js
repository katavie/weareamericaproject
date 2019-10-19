/** @jsx jsx */
import { jsx } from 'theme-ui'

const ContactForm = () => (
    <form 
        action="https://formspree.io/weareamericaLHS@gmail.com"
        method="POST"
        sx={{
            width: '100%',
            'label': {
                fontFamily: 'body', 
                fontSize: 1,
                fontWeight: 300,
                mb: 2,
                display: 'block'
            }, 
            'input, textarea': {
                display: 'block',
                mb: 4,
                padding: 2,
                fontSize: 1,
                fontFamily: 'body'
            },
            'textarea': {
                width: '100%',
                resize: 'none',
                height: '10rem',
            },
            'input[type="text"], input[type="email"]': {
                width: '20rem',
            }
        }}
    >

    <label for="name">Name: </label>
    <input type="text" name="name" id="name" />

    <label for="email">Email: </label>
    <input type="email" name="email" id="email" />

    <label for="message">Message: </label>
    <textarea name="message" id="message"></textarea>

    <input class="button" type="submit" value="Send" />
    </form>
)

export default ContactForm