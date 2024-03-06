/** @jsx jsx */

import * as React from 'react'
import { jsx, Flex, Box } from 'theme-ui'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { AiFillStar } from "react-icons/ai";

import { fadeInUp } from '../animation/animations'
import ContentCard from '../components/card'

const CourseSection = ({ ...props }) => {
  const courses = [
    {
      semester: 'fall 2022',
      courses: [
        {
          number: '15-122',
          name: 'Principles of Imperative Computation',
          favorite: true,
        },
        {
          number: '15-151',
          name: 'Mathematical Foundations for Computer Science',
        },
        {
          number: '21-241',
          name: 'Mathematical Foundations for Computer Science',
        },
        {
          number: '88-230',
          name: 'Human Intelligence and Human Stupidity',
        },
        {
          number: '79-189',
          name: 'Democracy and History: Thinking Beyond the Self',
        },
        {
          number: '07-128',
          name: 'First Year Immigration Course',
        },
      ]
    },
    {
      semester: 'spring 2023',
      courses: [
        {
          number: '15-150',
          name: 'Principles of Functional Programming',
          favorite: true,
        },
        {
          number: '15-251',
          name: 'Great Ideas in Theoretical Computer Science',
          favorite: true,
        },
        {
          number: '15-281',
          name: 'Artificial Intelligence: Representation and Problem Solving',
        },
        {
          number: '21-266',
          name: 'Vector Calculus for Computer Scientists',
        },
        {
          number: '76-107',
          name: 'Writing about Data',
        },
        {
          number: '76-108',
          name: 'Writing about Public Problems',
        },
      ]
    },
    {
      semester: 'fall 2023',
      courses: [
        {
          number: '15-317',
          name: 'Constructive Logic',
        },
        {
          number: '15-213',
          name: 'Introduction to Computer Systems',
        },
        {
          number: '36-225',
          name: 'Introduction to Probability Theory',
        },
        {
          number: '57-173',
          name: 'Survey of Western Music History',
        },
        {
          number: '57-188',
          name: 'Repertoire and Listening for Musicians',
        },
        {
          number: '98-317',
          name: 'Student Taught Courses (StuCo): Hype for Types',
        },
      ]
    },
    {
      semester: 'spring 2024',
      courses: [
        {
          number: '15-417',
          name: 'HOT Compilation',
        },
        {
          number: '15-411',
          name: 'Compiler Design',
          favorite: true,
        },
        {
          number: '15-311',
          name: 'Logic and Mechanized Reasoning',
        },
        {
          number: '15-210',
          name: 'Parallel and Sequential Data Structures and Algorithms',
        },
        {
          number: '36-226',
          name: 'Introduction to Statistical Inference',
        },
      ]
    }
  ]

  const [refCourses, inViewCourses] = useInView({
    triggerOnce: true
  })

  return (
    <Flex
      sx={{
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      id="courses"
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

          ref={refCourses}

          initial='initial'
          animate={inViewCourses ? 'animate' : 'none'}
          variants={fadeInUp()}
        >
          courses
        </motion.div>
        {courses.map((semester) => (
          <>
            <ContentCard>
              <Box
                sx={{
                  fontWeight: '600',
                  fontSize: [2, 4, null],
                  mb: 3,
                }}
              >
                {semester.semester}
              </Box>
              <ul>
                {semester.courses.map((course) => (
                  <li
                    sx={{
                      mb: 1,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {course.number}: {course.name} {course.favorite && <AiFillStar sx={{color: 'gold', ml: 2}} />}
                  </li>
                ))}
              </ul>
            </ContentCard>
          </>
        ))}
      </Flex>
    </Flex>
  )
}

export default CourseSection
