import React, { useState, useEffect } from "react";
import AboutUs from "../../components/aboutus";
const About = () => {

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true)
  }, [])
  return (
    domLoaded ?
      <AboutUs /> : null
  )
}
export default About