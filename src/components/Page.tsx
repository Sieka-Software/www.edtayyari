import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as Store from '../store';
import * as Actions from '../store/actions';
import * as Layout from './layout';
import * as Home from './home';
import * as Legal from "./legal";
import { CoursesRoot, CourseDetail } from './courses';
import { Order } from "./order";
import { InstructorsRoot } from './instructor';
import { Contact } from "./contact";
import * as WorkActions from "../store/slices/workSlice"
// import { Testimonials } from "./other";


export const HomePage = () => {
  const dispatch = Store.useAppDispatch();
  const { health } = Store.useAppSelector(state => state.master);

  useEffect(() => {
    if (health) {
      dispatch(Actions.getAllCourses());
      dispatch(Actions.getAllInstructors());
    }
  }, [health])

  return (
    <>
      <Home.Hero />
      <Home.Choose />
      <CoursesRoot />
      <InstructorsRoot />
      {/* <Testimonials /> */}
    </>
  )
}

export const AboutPage = () => {
  return (
    <>
      <Layout.Breadcrum title="About Us" />
      <Home.AboutUs />
      <InstructorsRoot />
      {/* <Testimonials /> */}
    </>
  )
}

export const CoursesPage = () => {
  const dispatch = Store.useAppDispatch();
  const { health } = Store.useAppSelector(state => state.master);
  const { courses } = Store.useAppSelector(state => state.work);

  useEffect(() => {
    if (health && courses.data.length === 0) {
      dispatch(Actions.getAllCourses());
    }
  }, [health, courses])

  return (
    <>
      <Layout.Breadcrum title="Courses" />
      <CoursesRoot />
    </>
  )
}

export const InstructorsPage = () => {
  const dispatch = Store.useAppDispatch();
  const { health } = Store.useAppSelector(state => state.master);
  const { instructors } = Store.useAppSelector(state => state.work);

  useEffect(() => {
    if (health && instructors.data.length === 0) {
      dispatch(Actions.getAllInstructors());
    }
  }, [health, instructors])

  return (
    <>
      <Layout.Breadcrum title="Instructors" />
      <InstructorsRoot />
    </>
  )
}


export const CoursePage = () => {
  const dispatch = Store.useAppDispatch();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    dispatch(WorkActions.resetCourse());
    if (id) {
      dispatch(Actions.getCourse(id));
    }
  }, [id])
  return (
    <>
      <Layout.Breadcrum title="Course" />
      <CourseDetail />
    </>
  )
}

export const OrderPage = () => {
  const dispatch = Store.useAppDispatch();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      dispatch(Actions.reviewOrder(id));
    }
  }, [id])
  return (
    <>
      <Layout.Breadcrum title="Checkout" />
      <Order />
    </>
  )
}

export const ContactPage = () => {
  return (
    <>
      <Layout.Breadcrum title="Contact Us" />
      <Contact />
    </>
  )
}

export const HyperlinkPolicyPage = () => {
  return (
    <>
      <Layout.Breadcrum title="Policy" />
      <Legal.HyperlinkPolicy />
    </>
  )
}

export const PrivacyPolicyPage = () => {
  return (
    <>
      <Layout.Breadcrum title="Policy" />
      <Legal.PrivacyPolicy />
    </>
  )
}

export const RefundPolicyPage = () => {
  return (
    <>
      <Layout.Breadcrum title="Policy" />
      <Legal.RefundPolicy />
    </>
  )
}

export const SecurityPolicyPage = () => {
  return (
    <>
      <Layout.Breadcrum title="Policy" />
      <Legal.SecurityPolicy />
    </>
  )
}

export const TermsAndConditionsPage = () => {
  return (
    <>
      <Layout.Breadcrum title="Policy" />
      <Legal.TermsAndConditions />
    </>
  )
}

