import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { utils } from '../../utils';
import { getAllCourses, getCourse, getAllInstructors } from '../actions';

type WorkState = {
  courses: {
    loading: boolean,
    status: any,
    data: CourseType[],
  },
  course: {
    loading: boolean,
    status: any,
    data: CourseType | undefined,
  },
  instructors: {
    loading: boolean,
    status: any,
    data: any,
  },
  orderCourse: {
    loading: boolean,
    status: any,
    data: CourseType | undefined,
  },
}

type WorkStateUpdate = {
  key: keyof WorkState
  value: any
}

type StateChildUpdate = {
  parent: keyof WorkState
  key: string
  value: any
}

const initialState: WorkState = {
  courses: {
    loading: true,
    status: {},
    data: [],
  },
  course: {
    loading: true,
    status: {},
    data: undefined,
  },
  instructors: {
    loading: true,
    status: {},
    data: [],
  },
  orderCourse: {
    loading: true,
    status: {},
    data: undefined,
  },
}

export const workSlice = createSlice({
  name: 'work',
  initialState: initialState,
  reducers: {
    setWorkState: (state, action: PayloadAction<WorkStateUpdate>) => {
      let { key, value } = action.payload
      state[key] = value
    },
    setWorkChildState: (state, action: PayloadAction<StateChildUpdate>) => {
      const { parent, key, value } = action.payload

      if (state[parent] && typeof state[parent] === 'object') {
        ; (state[parent] as Record<string, any>)[key] = value
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCourses.fulfilled, (state, action: PayloadAction<any>) => {
      let response = action.payload;
      state.courses.loading = false;
      state.courses.status = { type: utils.getCodeType(response.status), code: response.status, message: response.message }
      if (response.status === 200) {
        state.courses.data = response.data
      } else {
        state.courses.status.data = response.data;
      }
    })
    builder.addCase(getAllCourses.rejected, (state, action: PayloadAction<any>) => {
      let error = action.payload;
      state.courses.loading = false;
      state.courses.status = { type: 'error', code: 500, message: error.message, data: error.data }
    })
    builder.addCase(getCourse.fulfilled, (state, action: PayloadAction<any>) => {
      let response = action.payload;
      state.course.loading = false;
      state.course.status = { type: utils.getCodeType(response.status), code: response.status, message: response.message }
      if (response.status === 200) {
        state.course.data = response.data
      } else {
        state.course.status.data = response.data;
      }
    })
    builder.addCase(getCourse.rejected, (state, action: PayloadAction<any>) => {
      let error = action.payload;
      state.course.loading = false;
      state.course.status = { type: 'error', code: 500, message: error.message, data: error.data }
    })
    builder.addCase(getAllInstructors.fulfilled, (state, action: PayloadAction<any>) => {
      let response = action.payload;
      state.instructors.loading = false;
      state.instructors.status = { type: utils.getCodeType(response.status), code: response.status, message: response.message }
      if (response.status === 200) {
        state.instructors.data = response.data
      } else {
        state.instructors.status.data = response.data;
      }
    })
    builder.addCase(getAllInstructors.rejected, (state, action: PayloadAction<any>) => {
      let error = action.payload;
      state.instructors.loading = false;
      state.instructors.status = { type: 'error', code: 500, message: error.message, data: error.data }
    })
  },
})

export const { setWorkState, setWorkChildState } = workSlice.actions

export const workReducer = workSlice.reducer
