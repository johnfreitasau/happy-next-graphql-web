import React, {useCallback, useEffect, useState} from 'react';
import Link from 'next/link';
import {GetServerSideProps, GetStaticProps} from 'next';
import Sidebar from '../../components/Sidebar';
import {FiPlus} from 'react-icons/fi';
import {Container, Main} from '../../styles/pages/orphanages/CreateOrphanage';
import dynamic from 'next/dynamic';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useCreateOrphanageMutation } from '../../generated/graphql';
import { InputField } from '../../components/InputField';
import Switch from '../../components/Switch';
import { withApollo } from '../../utils/withApollo';

const preventDefault = (f: any) => (e: any) => {
  e.preventDefault()
  f(e)
}

interface CreateOrphanageProps {
  // create: Document[];
}

const DynamicMap = dynamic(() => import('../../components/MapEdit'), {ssr: false})

// export default function CreateOrphanages({}: CreateOrphanageProps) {
const CreateOrphanages: React.FC = () => {
const [checkboxValue, setCheckboxValue] = useState(false);

const [orphanages] = useCreateOrphanageMutation();

  const handleOpenOnWeekendsToggle = useCallback((checkboxValue) => {
    setCheckboxValue(!checkboxValue)

  }, []);

  // const handleSubmit = useCallback(async (e) => {
  //   e.preventdefault();

  //   const response = await orphanages({options: e});
  //   if(response.data?.createOrphanage) {
  //     console.log(response.data.createOrphanage)
  //     response.data.createOrphanage
  //   }

  //   console.log(`It's here`)

  // },[])

//         onSubmit={async (values) => {
//           const response = await orphanages({options: values});

//           if(response.data?.createOrphanage) {
//             console.log(response.data.createOrphanage)
//             response.data.createOrphanage
//           }
//           console.log(values)}}



  return (
    <Container>
    {/* <div id="page-create-orphanage"> */}
      <Sidebar />

      <Main>
      {/* <main> */}
      <Formik
            initialValues={{
              name: "",
              latitude: 0,
              longitude: 0,
              about: "",
              instructions: "",
              openingHours: "",
              openOnWeekends: false,
            }}

            onSubmit={async (values) => {
                const response = await orphanages({variables: {options: values}});

                console.log('It is on onSubmit')

                if(response.data?.createOrphanage) {
                  console.log('createOrphanage response:',response.data.createOrphanage)
                  console.log('checkboxValue',checkboxValue)
                  response.data.createOrphanage
                }
                console.log('values:',values)

                history.back();
              }}
            validationSchema={Yup.object().shape({
                name: Yup.string()
                    .min(3)
                    .max(50)
                    .required(),
                // latitude: Yup.number()
                //     .required(),
                // longitude: Yup.number()
                //     .required(),
                about: Yup.string()
                    .min(3)
                    .required(),
                instructions: Yup.string()
                    .min(3)
                    .required(),
                openingHours: Yup.string()
                    .min(3)
                    .required(),
                openOnWeekends: Yup.bool().oneOf([true], 'Open On Weekends is true if required').required()
                    .required()
            })}


        >
        <Form className="create-orphanage-form">
          <fieldset>
            <legend>Orphanage form</legend>

            <DynamicMap latitude={-33.8645508} longitude={151.2059748} />

            {/* <Map
              center={[-4.3032032,-38.9981043]}
              zoom={15}
              style={{ width: '100%', height: 280 }}
              onclick={handleMapClick} >
              {position.latitude !== 0 && (
                <Marker
                  interactive={false}
                  icon={happyMapIcon}
                  position={[position.latitude, position.longitude]}
                />
              )}
            </Map> */}

            <div className="input-block">
              <Field
                  name="name"
                  label="Name"
                  component={InputField}
              />
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

              <div className="uploaded-image">
              </div>
              <button className="new-image">
                <FiPlus size={24} color="#15b6d6" />
              </button>
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitation</legend>

            <div className="input-block">
              {/* <label htmlFor="instructions">Instructions</label>
              <textarea id="instructions"
                // value={instructions}
                // onChange={(e) => setInstructions(e.target.value)}
              /> */}
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
              {/* <label htmlFor="Open on the Weekends">Opened on Weekends</label> */}
              <Field
                  component={Switch}
                  name="openOnWeekends"
                  id="openOnWeekends"
                  label="Open On Weekends"

                  handleToggle={() => setCheckboxValue(!checkboxValue)}
                  onChange={() => handleOpenOnWeekendsToggle(!checkboxValue)}
                  checked={checkboxValue}
              />
{/*
              <div className="button-select">
                <button type="button"
                  // className={open_on_weekends ? "active" : ""}
                  // onClick={() => setOpenOnWeekends(true)}
                >Yes</button>
                <button type="button"
                  // className={open_on_weekends ? "active" : ""}
                  // onClick={() => setOpenOnWeekends(false)}
                >No</button>
              </div> */}

{/*
              <Switch
                isOn={value}
                onColor="#EF476F"
                handleToggle={() => setValue(!value)}
              /> */}


            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Submit
          </button>
        </Form>
        </Formik>
      {/* </main> */}
      </Main>
    {/* </div> */}
    </Container>

    );

}


export const getStaticProps: GetStaticProps<CreateOrphanageProps> = async () => {
  //const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recommended`);

  // const recommendedProducts = await client().query([
  //   Prismic.Predicates.at('document.type','product')
  // ])

  return {
    props: {

    }
  }
}

export default withApollo({ ssr: false })(CreateOrphanages);
//export default CreateOrphanages;
