import tw from "twin.macro"
import React from "react"
import styled from "@emotion/styled"
import { motion } from "framer-motion"

import SEO from "../components/seo"
// import background from "../images/map-bg.jpg"

export const easing = [0.6, -0.05, 0.01, 0.99];

export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 200
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
        duration: 0.75,
        ease: easing
    }
  }
};

export const fadeInDelay = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    duration: 0.4,
    transition: {
        delayChildren: 0.4,
    }
  }
};

const Home = styled(motion.section)`
  ${tw`relative w-screen min-h-screen flex items-center justify-start md:justify-center flex-col py-8 bg-orange-100`}
`

const BG = styled.div`
  ${tw`absolute inset-0`}
    z-index: 0;
    filter: blur(1px);
    -webkit-filter: blur(1px);
    opacity: 0.35;
    background-image: url("https://pictures.abebooks.com/ARTSOURCE1/30493336696.jpg");
    background-repeat: no-repeat;
    background-size: auto 120%;
    background-position: center center;
  }
`

const Container = styled.div`
  ${tw`w-full mx-auto px-8 z-10`}
  max-width: 768px;
`

const Main = styled(motion.div)`
 ${tw`relative pt-8 px-6 pb-8 md:pt-12 md:px-16 md:pb-8 rounded-lg shadow-2xl text-center mb-6 md:mb-auto`}
 background: #FFFDF9;
`

const LeftDots = styled.svg`
  ${tw`absolute top-0 left-0 fill-current text-yellow-500 w-1/4 h-auto`}
`
const RightDots = styled.svg`
  ${tw`absolute top-0 right-0 fill-current text-yellow-500 w-1/3 h-auto`}
`

const Dots = () => {
  return (
    <div>
      <LeftDots width="138" height="117" viewBox="0 0 138 117" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 113C3.10449 113 4 113.895 4 115C4 116.105 3.10449 117 2 117C0.895508 117 -7.82771e-08 116.105 -1.74846e-07 115C-2.71414e-07 113.895 0.895507 113 2 113ZM20 67C21.1045 67 22 67.8954 22 69C22 70.1046 21.1045 71 20 71C18.8955 71 18 70.1046 18 69C18 67.8954 18.8955 67 20 67ZM22 42C22 40.8954 21.1045 40 20 40C18.8955 40 18 40.8954 18 42C18 43.1046 18.8955 44 20 44C21.1045 44 22 43.1046 22 42ZM54 18C55.1045 18 56 18.8954 56 20C56 21.1046 55.1045 22 54 22C52.8955 22 52 21.1046 52 20C52 18.8954 52.8955 18 54 18ZM67 34C67 32.8954 66.1045 32 65 32C63.8955 32 63 32.8954 63 34C63 35.1046 63.8955 36 65 36C66.1045 36 67 35.1046 67 34ZM46 7C47.1045 7 48 7.89538 48 9C48 10.1046 47.1045 11 46 11C44.8955 11 44 10.1046 44 9C44 7.89538 44.8955 7 46 7ZM77 14C77 12.8954 76.1045 12 75 12C73.8955 12 73 12.8954 73 14C73 15.1046 73.8955 16 75 16C76.1045 16 77 15.1046 77 14ZM62 1.99999C63.1045 1.99999 64 2.89538 64 3.99999C64 5.10461 63.1045 5.99999 62 5.99999C60.8955 5.99999 60 5.10461 60 3.99999C60 2.89538 60.8955 1.99999 62 1.99999ZM121 11C121 9.89538 120.104 8.99999 119 8.99999C117.895 8.99999 117 9.89538 117 11C117 12.1046 117.895 13 119 13C120.104 13 121 12.1046 121 11ZM109.5 1.99999C110.881 1.99999 112 3.11925 112 4.49999C112 5.88073 110.881 6.99999 109.5 6.99999C108.119 6.99999 107 5.88073 107 4.49999C107 3.11925 108.119 1.99999 109.5 1.99999ZM105 20.5C105 19.1193 103.881 18 102.5 18C101.119 18 100 19.1193 100 20.5C100 21.8807 101.119 23 102.5 23C103.881 23 105 21.8807 105 20.5ZM81 15C82.6567 15 84 16.3431 84 18C84 19.6569 82.6567 21 81 21C79.3433 21 78 19.6569 78 18C78 16.3431 79.3433 15 81 15ZM8 85C8 83.8954 7.10449 83 6 83C4.8955 83 4 83.8954 4 85C4 86.1046 4.89551 87 6 87C7.10449 87 8 86.1046 8 85ZM42.5 71C43.8806 71 45 72.1193 45 73.5C45 74.8807 43.8806 76 42.5 76C41.1194 76 40 74.8807 40 73.5C40 72.1193 41.1194 71 42.5 71ZM-5.33279e-06 56C1.65673 56 2.99999 57.1193 2.99999 58.5C3 59.8807 1.65673 61 -4.89568e-06 61L-5.33279e-06 56ZM136 -1.18895e-05C137.104 -1.19861e-05 138 0.895374 138 1.99999C138 3.1046 137.104 3.99999 136 3.99999C134.895 3.99999 134 3.1046 134 1.99999C134 0.895374 134.895 -1.17929e-05 136 -1.18895e-05ZM3.99999 14C3.99999 12.8954 3.10448 12 1.99999 12C0.895499 12 -9.10111e-06 12.8954 -9.00455e-06 14C-8.90798e-06 15.1046 0.895499 16 1.99999 16C3.10448 16 3.99999 15.1046 3.99999 14ZM3.99999 26C5.65673 26 6.99999 27.3431 6.99999 29C6.99999 30.6569 5.65673 32 3.99999 32C2.34325 32 0.999992 30.6569 0.999992 29C0.999992 27.3431 2.34325 26 3.99999 26ZM7 66C7 64.3431 5.65673 63 4 63C2.34326 63 0.999995 64.3431 0.999996 66C0.999996 67.6569 2.34326 69 4 69C5.65673 69 7 67.6569 7 66ZM18 44C19.6567 44 21 45.3431 21 47C21 48.6569 19.6567 50 18 50C16.3433 50 15 48.6569 15 47C15 45.3431 16.3433 44 18 44ZM51 47C51 45.3431 49.6567 44 48 44C46.3433 44 45 45.3431 45 47C45 48.6569 46.3433 50 48 50C49.6567 50 51 48.6569 51 47ZM30 15C31.6567 15 33 16.3431 33 18C33 19.6569 31.6567 21 30 21C28.3433 21 27 19.6569 27 18C27 16.3431 28.3433 15 30 15ZM40 3C40 1.34314 38.6567 -3.37948e-06 37 -3.23464e-06C35.3433 -3.08981e-06 34 1.34314 34 3C34 4.65686 35.3433 6 37 6C38.6567 6 40 4.65686 40 3ZM88 -7.6932e-06C89.6567 -7.83804e-06 91 1.34313 91 2.99999C91 4.65685 89.6567 5.99999 88 5.99999C86.3433 5.99999 85 4.65685 85 2.99999C85 1.34313 86.3433 -7.54837e-06 88 -7.6932e-06Z"/>
      </LeftDots>
      <RightDots width="138" height="117" viewBox="0 0 138 117" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M136 113C134.896 113 134 113.895 134 115C134 116.105 134.896 117 136 117C137.104 117 138 116.105 138 115C138 113.895 137.104 113 136 113ZM118 67C116.896 67 116 67.8954 116 69C116 70.1046 116.896 71 118 71C119.104 71 120 70.1046 120 69C120 67.8954 119.104 67 118 67ZM116 42C116 40.8954 116.896 40 118 40C119.104 40 120 40.8954 120 42C120 43.1046 119.104 44 118 44C116.896 44 116 43.1046 116 42ZM84 18C82.8955 18 82 18.8954 82 20C82 21.1046 82.8955 22 84 22C85.1045 22 86 21.1046 86 20C86 18.8954 85.1045 18 84 18ZM71 34C71 32.8954 71.8955 32 73 32C74.1045 32 75 32.8954 75 34C75 35.1046 74.1045 36 73 36C71.8955 36 71 35.1046 71 34ZM92 7C90.8955 7 90 7.89538 90 9C90 10.1046 90.8955 11 92 11C93.1045 11 94 10.1046 94 9C94 7.89538 93.1045 7 92 7ZM61 14C61 12.8954 61.8955 12 63 12C64.1045 12 65 12.8954 65 14C65 15.1046 64.1045 16 63 16C61.8955 16 61 15.1046 61 14ZM76 1.99999C74.8955 1.99999 74 2.89538 74 3.99999C74 5.10461 74.8955 5.99999 76 5.99999C77.1045 5.99999 78 5.10461 78 3.99999C78 2.89538 77.1045 1.99999 76 1.99999ZM17 11C17 9.89538 17.8955 8.99999 19 8.99999C20.1045 8.99999 21 9.89538 21 11C21 12.1046 20.1045 13 19 13C17.8955 13 17 12.1046 17 11ZM28.5 1.99999C27.1194 1.99999 26 3.11925 26 4.49999C26 5.88073 27.1194 6.99999 28.5 6.99999C29.8806 6.99999 31 5.88073 31 4.49999C31 3.11925 29.8806 1.99999 28.5 1.99999ZM33 20.5C33 19.1193 34.1194 18 35.5 18C36.8806 18 38 19.1193 38 20.5C38 21.8807 36.8806 23 35.5 23C34.1194 23 33 21.8807 33 20.5ZM57 15C55.3433 15 54 16.3431 54 18C54 19.6569 55.3433 21 57 21C58.6567 21 60 19.6569 60 18C60 16.3431 58.6567 15 57 15ZM130 85C130 83.8954 130.896 83 132 83C133.104 83 134 83.8954 134 85C134 86.1046 133.104 87 132 87C130.896 87 130 86.1046 130 85ZM95.5 71C94.1194 71 93 72.1193 93 73.5C93 74.8807 94.1194 76 95.5 76C96.8806 76 98 74.8807 98 73.5C98 72.1193 96.8806 71 95.5 71ZM138 56C136.343 56 135 57.1193 135 58.5C135 59.8807 136.343 61 138 61L138 56ZM2.00001 -1.18895e-05C0.895518 -1.19861e-05 1.01502e-05 0.895374 1.00536e-05 1.99999C9.95705e-06 3.1046 0.895518 3.99999 2.00001 3.99999C3.1045 3.99999 4.00001 3.1046 4.00001 1.99999C4.00001 0.895374 3.1045 -1.17929e-05 2.00001 -1.18895e-05ZM134 14C134 12.8954 134.896 12 136 12C137.105 12 138 12.8954 138 14C138 15.1046 137.105 16 136 16C134.896 16 134 15.1046 134 14ZM134 26C132.343 26 131 27.3431 131 29C131 30.6569 132.343 32 134 32C135.657 32 137 30.6569 137 29C137 27.3431 135.657 26 134 26ZM131 66C131 64.3431 132.343 63 134 63C135.657 63 137 64.3431 137 66C137 67.6569 135.657 69 134 69C132.343 69 131 67.6569 131 66ZM120 44C118.343 44 117 45.3431 117 47C117 48.6569 118.343 50 120 50C121.657 50 123 48.6569 123 47C123 45.3431 121.657 44 120 44ZM87 47C87 45.3431 88.3433 44 90 44C91.6567 44 93 45.3431 93 47C93 48.6569 91.6567 50 90 50C88.3433 50 87 48.6569 87 47ZM108 15C106.343 15 105 16.3431 105 18C105 19.6569 106.343 21 108 21C109.657 21 111 19.6569 111 18C111 16.3431 109.657 15 108 15ZM98 3C98 1.34314 99.3433 -3.37948e-06 101 -3.23464e-06C102.657 -3.08981e-06 104 1.34314 104 3C104 4.65686 102.657 6 101 6C99.3433 6 98 4.65686 98 3ZM50 -7.6932e-06C48.3433 -7.83804e-06 47 1.34313 47 2.99999C47 4.65685 48.3433 5.99999 50 5.99999C51.6567 5.99999 53 4.65685 53 2.99999C53 1.34313 51.6567 -7.54837e-06 50 -7.6932e-06Z"/>
      </RightDots>
    </div>
  )
}

const Heading = styled.h1`
  ${tw`text-5xl md:text-7xl text-yellow-600 p-4 md:p-8 flex flex-col items-center justify-start`}
  font-family: "MadinaScript", script;
  transform: rotate(-4deg);
  div:first-of-type {
    ${tw`text-6xl md:text-9xl`}
    margin: 0 -0.75rem -2.5rem 0;
    @media only screen and (max-width: 640px) {
      margin: 0 -0.75rem -1rem 0;
    }
  }
  span {
    ${tw`text-base md:text-xl font-medium uppercase`}
    font-family: sans-serif;
  }
`

const Content = styled.div`
  ${tw`flex flex-col space-y-4 md:space-y-6 md:max-w-xs pt-6 md:p-4 mx-auto text-orange-900`}
`
const Intro = styled.div`
  div {
    ${tw`uppercase font-semibold text-sm`}
  }
  span {
    ${tw`uppercase block text-xl md:text-3xl font-semibold text-pink-400`}
  }
`
const Hosts = styled.div`
  span {
    ${tw`uppercase font-semibold text-sm`}
  }
`
const EventInfo = styled.div`
  ${tw`py-4`}
  div:first-child {
    ${tw`text-lg font-medium`}
  }
  .time-slots {
    ${tw`py-4`}
  }
  .covid {
    ${tw`pt-6 opacity-75 text-xs`}
    span {
      ${tw`font-semibold`}
    }
    a {
      ${tw`underline`}
    }
  }
  ${'' /* div:nth-child(2) {
    ${tw`opacity-50`}
  } */}

`
const RSVP = styled.div`
  a {
    ${tw`py-1 px-2 underline`}
  }
`

const Footer = styled.footer`
  ${tw`mt-8 border-t border-gray-200 text-orange-900 text-center md:max-w-md md:p-4 mx-auto`}
  div {
    ${tw`p-4 opacity-50`}
    a {
      ${tw`underline`}
    }
  }
  span {
    ${tw`pt-2 underline`}
  }
`

export default () => (
  <Home exit={{ opacity: 0 }} initial="initial" animate="animate" variants={fadeInDelay}>
    <BG></BG>
      <Container>
        <SEO title="Home" />
        <Main variants={fadeInUp}>
          <Dots/>
          <Dots top="top"/>
          <Heading>
            <div>Traveling</div>
            <span>from</span>
            <div>Miss to Mrs</div>
          </Heading>
          <Content>
            <Intro><div>Please join us for a bridal shower celebrating</div><span>Piper Gullickson</span></Intro>
            <Hosts>
              <span>Hosted by</span>
              <div>Ashley Cupstid<br></br>Erin Faulk<br></br>Kathryn Williamson</div>
            </Hosts>
            <EventInfo>
              <div>August 22, 1-3 PM</div>
              <a href="#">16110 Gulls Bluff Ln<br></br> Cypress, TX 77433</a>
              {/* <div className="time-slots">
              Time Slot 1: 1 - 2:30 pm
              <br></br>
              Time Slot 2: 3 - 4:30 pm 
              </div> */}
              <div className="covid">
                <span>COVID-19 Updates:</span>
                <br></br>
                Any updates will be posted here so please continue to check back.
              </div>
            </EventInfo>
            <RSVP>
              Kindly RSVP by August 19 to <a href="mailto:erinmichellefaulk@gmail.com">erinmichellefaulk@gmail.com</a>
            </RSVP>
          </Content>
          <Footer>
            <div>
              Registered at <a target="blank" href="https://track-registry.theknot.com/track/view?r=736121717&rt=14020&a=995&lt=RetailerGVR&st=WeddingWebsite&sp=LinkedRegistries&ss=RegistryPage&eventType=1">Amazon</a>, <a target="blank" href="https://www.target.com/gift-registry/giftgiver?registryId=f248eac51b4f4ff0954adffc7c669c60&type=WEDDING&clkid=d8de8069N334211eabd3442010a246c11&lnm=81938&afid=The%20Knot%2C%20Inc%20and%20Subsidiaries&ref=tgt_adv_xasd0002">Target</a>, <a target="blank" href="https://www.crateandbarrel.com/jump.aspx?bid=1001788&t=8&grid=6142323&trkid=1848&wcsid=779057834">Crate and Barrel</a>, and <a target="blank" href="https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/549099218?wcref=yes&wcsid=779057899">Bed Bath & Beyond</a>
            </div>
            <span>Masks required</span>
          </Footer>
        </Main>
      </Container>
  </Home>
)
