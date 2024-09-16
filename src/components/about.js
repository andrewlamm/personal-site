/** @jsx jsx */

import { jsx, Flex } from 'theme-ui'
import { useCallback } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { scroller } from 'react-scroll'

import { fadeInUp } from '../animation/animations'
import ContentCard from '../components/card'
import OutsideLink from '../components/outsideLink'

const AboutSection = ({ ...props }) => {
  const [refAbout, inViewAbout] = useInView({
    triggerOnce: true
  })

  const scrollCourses = useCallback(() => {
    scroller.scrollTo('courses', {
      duration: 400,
      smooth: 'easeInOut',
    })
  }, [])

  return (
    <Flex
      sx={{
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      id="about"
    >
      <Flex
        sx={{
          flexDirection: 'column',
          width: ['100%', '80%', '50%'],
        }}
      >
        <motion.div
          sx={{
            fontWeight: 'bold',
            fontSize: 10,
            mb: 1,
          }}

          ref={refAbout}

          initial='initial'
          animate={inViewAbout ? 'animate' : 'none'}
          variants={fadeInUp()}
        >
          about me
        </motion.div>
        {/* <ContentCard>
          I'm Andrew Lam, a rising junior studying Computer Science at Carnegie Mellon University. Currently, I am working as a software engineer intern for <OutsideLink href="https://academy.cs.cmu.edu/">CS Academy</OutsideLink>.
          During the school semesters, I am a Teaching Assistant for <OutsideLink href="http://www.cs.cmu.edu/~15150/">15-150: Principles of Functional Programming</OutsideLink>. I was also a teaching assistant for <OutsideLink href="http://www.cs.cmu.edu/~15122-archive/s23/">15-122: Principles of Imperative Computation</OutsideLink> during the Spring 2023 semester as well.
        </ContentCard> */}
        <ContentCard>
          I'm Andrew Lam, a junior studying Computer Science at Carnegie Mellon University. My classes this semester include <OutsideLink href="https://www.cs.cmu.edu/~15451-f24/index.html">Algorithm Design and Analysis</OutsideLink> and <OutsideLink href="https://csd.cmu.edu/course/15312/f24">Foundations of Programming Languages</OutsideLink>.
          Currently, I am a Teaching Assistant for <OutsideLink href="http://www.cs.cmu.edu/~15150/">15-150: Principles of Functional Programming</OutsideLink>. I was also a teaching assistant for <OutsideLink href="http://www.cs.cmu.edu/~15122-archive/s23/">15-122: Principles of Imperative Computation</OutsideLink> during the Spring 2023 semester as well. Last summer, I worked as a software engineer intern for <OutsideLink href="https://academy.cs.cmu.edu/">CMU CS Academy</OutsideLink>.
        </ContentCard>
        <ContentCard>
          Some of the classes that I have taken include (with the semester I took them in parentheses):
          <ul>
            <li><OutsideLink href="http://www.cs.cmu.edu/~15122-archive/f22/">Principles of Imperative Computation</OutsideLink> (Fall 2022)</li>
            <li><OutsideLink href="http://www.cs.cmu.edu/~15150/">Principles of Functional Programming</OutsideLink> (Spring 2023)</li>
            <li><OutsideLink href="https://s23.cs251.com/">Great Ideas in Theoretical Computer Science</OutsideLink> (Spring 2023)</li>
            <li><OutsideLink href="https://www.cs.cmu.edu/~213/">Introduction to Computer Systems</OutsideLink> (Fall 2023)</li>
            <li><OutsideLink href="https://www.cs.cmu.edu/~15210/">Parallel and Sequential Data Structures and Algorithms</OutsideLink> (Spring 2024)</li>
            <li><OutsideLink href="https://www.cs.cmu.edu/~janh/courses/411/24/">Compiler Design</OutsideLink> (Spring 2024)</li>
          </ul>
          You can find a full list of my classes in the <span onClick={scrollCourses} sx={{ textDecoration: 'underline', cursor: 'pointer' }}>courses</span> section.
        </ContentCard>
        {/* <ContentCard>
          I really enjoy helping people, and many of my projects are designed to help people with certain tasks. A couple summers ago, I helped pioneer a website that taught the basics of web development for a web development class at my high school. Additionally, during my senior year, I worked on a project that improved the school's course catalog to aid students in their course selection process. Also, I volunteered as a beginning Java teacher at my local Chinese school and taught introductory Java topics to middle school students every week for a year.
        </ContentCard> */}
        <ContentCard>
          I graduated from Thomas Jefferson High School for Science and Technology in 2022 with a 4.51 GPA. In high school, I took many advanced courses including Multivariable Calculus, Linear Algebra, AP Computer Science with Data Structures, Artificial Intelligence, Machine Learning, Advanced Math Techniques, and AP Physics C. During my senior year, I was the statisician for my school's <OutsideLink href="https://tjcsec.club/">Computer Security Club</OutsideLink> and helped host <OutsideLink href="https://tjctf.org/">TJCTF</OutsideLink>, a CTF consisting of over 1100 players and over 300 teams. Additionally, I marched trumpet for my school's marching band for all four years and volunteered to be a quartermaster for three.
        </ContentCard>
      </Flex>
    </Flex>
  )
}

export default AboutSection
