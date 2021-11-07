import { About } from "./components/about"
import { Contact } from "./components/contact"
import { Gallery } from "./components/gallery"
import { Reviews } from "./components/reviews"
import { Services } from "./components/services"

export const MainPage = () => {
    return (
        <div>

<h1 className="divider">Having any of these problems? </h1>
<Services />
<h1 className="divider">We have trained technicians ready to assist you</h1>
<About />
<h1 className="divider">We service all kinds of trucks</h1>
<Gallery />
<h1 className="divider">Hear from our satisfied customers</h1>
<Reviews />
<h1 className="divider">Stop by our shop or give us a call</h1>
<Contact />
        </div>
    )
}