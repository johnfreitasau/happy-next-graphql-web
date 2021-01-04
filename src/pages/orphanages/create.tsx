import React, { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { GetServerSideProps, GetStaticProps } from 'next'
import Sidebar from '../../components/Sidebar'
import { FiPlus } from 'react-icons/fi'
import { Container, Main } from '../../styles/pages/orphanages/CreateOrphanage'
import dynamic from 'next/dynamic'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useCreateOrphanageMutation } from '../../generated/graphql'
import { InputField } from '../../components/InputField'
import Switch from '../../components/Switch'
import { withApollo } from '../../utils/withApollo'

const preventDefault = (f: any) => (e: any) => {
  e.preventDefault()
  f(e)
}

interface CreateOrphanageProps {
  // create: Document[];
}

const DynamicMap = dynamic(() => import('../../components/MapEdit'), {
  ssr: false
})

// export default function CreateOrphanages({}: CreateOrphanageProps) {
const CreateOrphanages: React.FC = () => {
  const [checkboxValue, setCheckboxValue] = useState(false)
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)

  const [orphanages] = useCreateOrphanageMutation()

  const handleOpenOnWeekendsToggle = useCallback((checkboxValue) => {
    setCheckboxValue(!checkboxValue)
  }, [])

  const handleSelectedLocation = useCallback((latitude, longitude) => {
    setLatitude(latitude)
    setLongitude(longitude)
  }, [])

  return (
    <Container>
      <Sidebar />

      <Main>
        <Formik
          initialValues={{
            name: '',
            latitude: 0,
            longitude: 0,
            about: '',
            instructions: '',
            openingHours: '',
            openOnWeekends: false
          }}
          onSubmit={async (values) => {
            values.latitude = latitude
            values.longitude = longitude

            const response = await orphanages({
              variables: { options: values }
            })

            console.log('It is on onSubmit')

            if (response.data?.createOrphanage) {
              console.log(
                'createOrphanage response:',
                response.data.createOrphanage
              )
              console.log('checkboxValue', checkboxValue)
              response.data.createOrphanage
            }
            console.log('values:', values)

            history.back()
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().min(3).max(50).required(),
            latitude: Yup.number()
                .required(),
            longitude: Yup.number()
                .required(),
            about: Yup.string().min(3).required(),
            instructions: Yup.string().min(3).required(),
            openingHours: Yup.string().min(3).required(),
            openOnWeekends: Yup.bool()
          })}
        >
          <Form className="create-orphanage-form">
            <fieldset>
              <legend>Orphanage form</legend>
              <div className="input-block">
                <DynamicMap
                  label="Add the Orphanage position"
                  location={handleSelectedLocation}
                />
              </div>
              <div className="input-block">
                <Field name="name" label="Name" component={InputField} />
              </div>

              <div className="input-block">
                <Field
                  name="about"
                  label="About (Max of 300 caracteres)"
                  textarea={true}
                  component={InputField}
                  maxLength={300}
                />
              </div>

              <div className="input-block">
                <label htmlFor="images">Photos</label>

                <div className="uploaded-image"></div>
                <button className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </button>
              </div>
            </fieldset>

            <fieldset>
              <legend>Visitation</legend>

              <div className="input-block">
                <Field
                  name="instructions"
                  label="Instructions"
                  textarea={true}
                  component={InputField}
                />
              </div>

              <div className="input-block">
                <Field
                  name="openingHours"
                  label="Opening Hours"
                  component={InputField}
                />
              </div>

              <div className="input-block">
                <Field
                  component={Switch}
                  name="openOnWeekends"
                  id="openOnWeekends"
                  label="Open On Weekends"
                  handleToggle={() => setCheckboxValue(!checkboxValue)}
                  onChange={() => handleOpenOnWeekendsToggle(!checkboxValue)}
                  checked={checkboxValue}
                />
              </div>
            </fieldset>

            <button className="confirm-button" type="submit">
              Submit
            </button>
          </Form>
        </Formik>
      </Main>
    </Container>
  )
}

export default withApollo({ ssr: false })(CreateOrphanages)
