import Link from "next/link";
import { Fragment } from "react";

function AboutUsPage() {
    return(
    <Fragment>
    <h1>The About us Page</h1>
    <h2>Developers</h2>
    <ul>
      <li><Link href='/aboutus/1'>Yash</Link></li>
      <li><Link href='/aboutus/2'>Vaibhav</Link></li>
      <li><Link href='/aboutus/3'>Suresh</Link></li>
    </ul>
    </Fragment>
    )  
}

  export default AboutUsPage;