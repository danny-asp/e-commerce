import { Box, Button, Divider, Link, Paper, TextField, Typography } from '@mui/material'
import { useAuth } from 'core'
import { useFormik } from 'formik'
import { Link as RouterLink } from 'react-router-dom'
import { PageURLs } from 'Routes'
import * as yup from 'yup'

const Login = () => {
  const { login } = useAuth()

  const validationSchema = yup.object({
    email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async ({ email, password }) => {
      await login({ email, password })
    },
  })
  return (
    <Paper sx={{ p: 2, maxWidth: 400, width: '100%' }}>
      {console.log(formik)}
      <Typography variant="h6" align="center">
        Login
      </Typography>
      <Divider sx={{ my: 2 }} />
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          label="Email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={{ mb: 1 }}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          sx={{ mb: 2 }}
        />

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Button color="primary" variant="contained" type="submit">
            Submit
          </Button>
          <Link component={RouterLink} to={PageURLs.Register} variant="caption">
            No account? Register!
          </Link>
        </Box>
      </form>
    </Paper>
  )
}

export default Login
