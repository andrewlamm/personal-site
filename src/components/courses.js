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
      semester: 'fall 2024',
      courses: [
        {
          number: '05-391',
          name: 'Designing Human Centered Software',
        },
        {
          number: '15-312',
          name: 'Foundations of Programming Languages',
        },
        {
          number: '15-316',
          name: 'Software Foundations of Security and Privacy',
        },
        {
          number: '15-451',
          name: 'Algorithm Design and Analysis',
        },
        {
          number: '76-270',
          name: 'Writing for the Professions for SCS Students',
        },
      ]
    },
    {
      semester: 'spring 2024',
      courses: [
        {
          number: '15-210',
          name: 'Parallel and Sequential Data Structures and Algorithms',
        },
        {
          number: '15-411',
          name: 'Compiler Design',
          favorite: true,
        },
        {
          number: '15-417',
          name: 'HOT Compilation',
        },
        {
          number: '36-226',
          name: 'Introduction to Statistical Inference',
        },
      ]
    },
    {
      semester: 'fall 2023',
      courses: [
        {
          number: '15-213',
          name: 'Introduction to Computer Systems',
        },
        {
          number: '15-317',
          name: 'Constructive Logic',
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
          number: '07-128',
          name: 'First Year Immigration Course',
        },
        {
          number: '21-241',
          name: 'Mathematical Foundations for Computer Science',
        },
        {
          number: '79-189',
          name: 'Democracy and History: Thinking Beyond the Self',
        },
        {
          number: '88-230',
          name: 'Human Intelligence and Human Stupidity',
        },
      ]
    },
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
        <ContentCard
          sx={{

          }}
        >
          A list of courses I have taken at Carnegie Mellon University, separated by semester.
          A <AiFillStar sx={{ color: 'gold', verticalAlign: 'middle', }} /> denotes that I particularly enjoyed the course.
        </ContentCard>
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
                    }}
                  >
                    {course.number}: {course.name} {course.favorite && <AiFillStar sx={{color: 'gold', ml: 2, verticalAlign: 'middle'}} />}
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
