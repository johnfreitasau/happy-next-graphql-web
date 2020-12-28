// import { useForm } from "react-hook-form";
// import {useEffect, useState} from 'react';
// import Link from 'next/link';
// import {GetServerSideProps, GetStaticProps} from 'next';
// import Sidebar from '../../components/Sidebar';
// import {FiPlus} from 'react-icons/fi';
// import {Formik, Form} from 'formik';

// import {OrphanageFormData} from '../../../types/orphanages';
// import Input from '../../components/Input';
// import TextArea from '../../components/TextArea';
// import {Container, Main} from '../../styles/pages/orphanages/CreateOrphanage';
// import dynamic from 'next/dynamic';
// import { useCreateOrphanageMutation } from '../../generated/graphql';

// const preventDefault = (f: any) => (e: any) => {
//   e.preventDefault()
//   f(e)
// }

// interface CreateOrphanageProps {
//   // create: Document[];
// }

// const DynamicMap = dynamic(() => import('../../components/MapEdit'), {ssr: false})

// interface CreateOrphanageForm {
//   onSubmit: (orphanageData: OrphanageFormData) => void;
//   isLoading: boolean;
//   defaultValues?: OrphanageFormData
// }

// export const CreateOrphanage: React.FC<CreateOrphanageForm> = ({
//   isLoading,
//   onSubmit,
//   defaultValues,
// }) => {
//   const {
//     errors,
//     register,
//     formState,
//     handleSubmit,
//   } = useForm<OrphanageFormData>({
//     mode: "all",
//     // resolver: yupResolver(createRecipeSchema),
//     defaultValues,
//   });

// // export default function CreateOrphanages({}: CreateOrphanageProps) {

//   // const handleSubmit = preventDefault(() => {
//   //   console.log(`It's here`)
//   // })


//   const [,orphanages] = useCreateOrphanageMutation();



//   return (
//     <Container>
//     {/* <div id="page-create-orphanage"> */}
//       <Sidebar />

//       <Main>
//       {/* <main> */}
//       <Formik
//         initialValues={
//           {
//           name: "",
//           latitude: 0,
//           longitude: 0,
//           about: "",
//           instructions: "",
//           openingHours: "",
//           openOnWeekends: false,
//           }
//         }
//         onSubmit={async (values) => {
//           const response = await orphanages({options: values});

//           if(response.data?.createOrphanage) {
//             console.log(response.data.createOrphanage)
//             response.data.createOrphanage
//           }
//           console.log(values)}}>
//         <Form className="create-orphanage-form">
//           <fieldset>
//             <legend>Orphanage form</legend>

//             <div className="map-container">
//               <DynamicMap />
//               <footer>
//                 {/* <a
//                   href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}
//                 > */}
//                   See the route in Google Maps
//                 {/* </a> */}
//               </footer>
//             </div>

//             <div className="input-block">
//               {/* <Input
//                 name="Name"
//                 label="Name"
//               /> */}
//               <Input
//                 ref={register}
//                 name="name"
//                 label="Name"
//                 error={errors?.name?.message}
//                 // data-testid="recipe-name-input"
//               />
//             </div>

//             <div className="input-block">
//               <TextArea
//               ref={register}
//               name="about"
//               label="About (Max of 300 caracteres)"
//               error={errors?.about?.message}
//             />
//             </div>

//             <div className="input-block">
//               <label htmlFor="images">Photos</label>
//               <div className="uploaded-image">
//               </div>
//               <button className="new-image">
//                 <FiPlus size={24} color="#15b6d6" />
//               </button>
//             </div>
//           </fieldset>

//           <fieldset>
//             <legend>Visitation</legend>

//             <div className="input-block">
//               <TextArea
//               name="instructions"
//               label="Instructions"
//               // textarea={true}
//               // maxLength={300}
//             />
//             </div>

//             <div className="input-block">
//               <Input
//                 name="opening_hours"
//                 label="Opening Hours"
//               />
//             </div>

//             <div className="input-block">
//               <label htmlFor="open_on_weekends">Opened on Weekends</label>

//               <div className="button-select">
//                 <button type="button"
//                   // className={open_on_weekends ? "active" : ""}
//                   // onClick={() => setOpenOnWeekends(true)}
//                 >Yes</button>
//                 <button type="button"
//                   // className={open_on_weekends ? "active" : ""}
//                   // onClick={() => setOpenOnWeekends(false)}
//                 >No</button>
//               </div>
//             </div>
//           </fieldset>

//           <button className="confirm-button" type="submit">
//             Submit
//           </button>
//         </Form>
//         </Formik>
//       {/* </main> */}
//       </Main>
//     {/* </div> */}
//     </Container>
//   );
// }

// export const getStaticProps: GetStaticProps<CreateOrphanageProps> = async () => {
//   //const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recommended`);

//   // const recommendedProducts = await client().query([
//   //   Prismic.Predicates.at('document.type','product')
//   // ])

//   return {
//     props: {

//     }
//   }
// }




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

const [,orphanages] = useCreateOrphanageMutation();


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
                const response = await orphanages({options: values});

                if(response.data?.createOrphanage) {
                  console.log(response.data.createOrphanage)
                  response.data.createOrphanage
                }
                console.log(values)}}
            validationSchema={Yup.object().shape({
                name: Yup.string()
                    .min(3)
                    .max(50)
                    .required(),
                latitude: Yup.number()
                    .required(),
                longitude: Yup.number()
                    .required(),
                about: Yup.string()
                    .min(3)
                    .required(),
                instructions: Yup.string()
                    .min(3)
                    .required(),
                openingHours: Yup.string()
                    .min(3)
                    .required(),
                openOnWeekends: Yup.boolean()
                    .required()
            })}
        >
        <form className="create-orphanage-form">
          <fieldset>
            <legend>Orphanage form</legend>

            <DynamicMap />

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
              <label htmlFor="name">Name</label>
              <input id="name"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="about">About <span>Max of 300 caracteres</span></label>
              <textarea id="name"
                maxLength={300}
                // value={about}
                // onChange={(e) => setAbout(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

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
              <label htmlFor="instructions">Instructions</label>
              <textarea id="instructions"
                // value={instructions}
                // onChange={(e) => setInstructions(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Opening Hours</label>
              <input id="opening_hours"
                // value={opening_hours}
                // onChange={(e) => setOpeningHours(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Opened on Weekends</label>

              <div className="button-select">
                <button type="button"
                  // className={open_on_weekends ? "active" : ""}
                  // onClick={() => setOpenOnWeekends(true)}
                >Yes</button>
                <button type="button"
                  // className={open_on_weekends ? "active" : ""}
                  // onClick={() => setOpenOnWeekends(false)}
                >No</button>
              </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Submit
          </button>
        </form>
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
export default CreateOrphanages;
