type CourseOverviewType = {
    _id: mongoose.Types.ObjectId;
    title: string,
    body: string,
}

type CourseCurriculumType = {
    _id: mongoose.Types.ObjectId;
    curriculumTitle: string,
    noOfLectures: string,
    lectureLength: string,
    subSections: string[]
}

type CourseReferencesType = {
    _id: mongoose.Types.ObjectId;
    referenceName: string,
    referenceUrl: string,
    referenceType: string,
    referenceExt: string
}

type CourseType =  {
    _id: mongoose.Types.ObjectId;
    courseCode: string;
    courseName: string;
    courseCategory: string;
    coursePhoto: string;
    coursePreview: string;
    courseLevel: string;
    courseSummary: string;
    courseLanguage: string;
    courseDuration: string;
    courseLecture: number;
    courseStartDate: Date;
    courseEndDate: Date;
    courseStatus: string;
    courseMRP: number;
    coursePrice: number;
    courseOverview: CourseOverviewType[];
    courseCurriculum: CourseCurriculumType[];
    courseReferences?: CourseReferencesType[];
    isActive: boolean;
    isCertificate: boolean;
    isMoneyback: boolean;
    studentsEnrolled: number;
    instructorId: mongoose.Types.ObjectId;
    isLive: boolean;
    instructorInfo: any;
}

type InstructorType = {
    _id: mongoose.Types.ObjectId;
    instructorName: string;
    instructorPhoto: string;
    instructorTitle: string;
    instructorDesignation: string;
    instructorSummary: string;
    instructorEmail: string;
    instructorLinkedin: string;
    isActive: boolean;
}