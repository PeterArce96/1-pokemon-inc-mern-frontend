import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from 'yup';
import usePokemons from '../hooks/usePokemons'

const PokemonsForm = () => {
    const {createPokemon} = usePokemons();

    return (
        <Formik 
            initialValues={{
                name: '',
                type: '',
                hp: '',
                attack: '',
                special: '',
                image: {}
            }}
            validationSchema = {yup.object({
                name: yup.string().required('El nombre es requerido'),
                type: yup.string().required('El tipo es requerido'),
                hp: yup.number().required('El HP es requerido').positive().integer(),
                attack: yup.string().required('El ataque es requerido'),
                special: yup.string().required('El especial es requerido'),
            })}
            onSubmit={(values) => {
                createPokemon(values);
            }}
        >
            {({ handleSubmit }) => {
                return (
                    <Form
                        onSubmit={handleSubmit} className="flex flex-col gap-4 bg-zinc-700 rounded-md w-4/5 max-w-sm mx-auto p-4"
                    >
                        <div className="flex flex-col gap-1">
                            <Field name='name' type="text" placeholder='Nombre' className="bg-zinc-800 rounded p-2"/>
                            <ErrorMessage name="name" component="span" className="text-rose-500 text-sm"/>
                        </div>

                        <div className="flex flex-col gap-1">
                            <Field name='type' type="text" placeholder='Tipo' className="bg-zinc-800 rounded p-2"/>
                            <ErrorMessage name="type" component="span" className="text-rose-500 text-sm"/>
                        </div>

                        <div className="flex flex-col gap-1">
                            <Field name='hp' type="number" placeholder='HP' className="bg-zinc-800 rounded p-2"/>
                            <ErrorMessage name="hp" component="span" className="text-rose-500 text-sm"/>
                        </div> 

                        <div className="flex flex-col gap-1">
                            <Field name='attack' type="text" placeholder='Ataque' className="bg-zinc-800 rounded p-2"/>
                            <ErrorMessage name="attack" component="span" className="text-rose-500 text-sm"/>
                        </div>

                        <div className="flex flex-col gap-1">
                            <Field name='special' type="text" placeholder='Especial' className="bg-zinc-800 rounded p-2"/>
                            <ErrorMessage name="special" component="span" className="text-rose-500 text-sm"/>
                        </div>
                        
                        <input type="file" className="
                            bg-zinc-800
                            rounded p-2 text-sm cursor-pointer 
                            file:bg-white file:border-0 file:rounded 
                            file:font-semibold 
                            file:mr-2 
                            file:p-1 
                            file:px-2 
                            file:cursor-pointer file:transition-colors hover:file:bg-zinc-300"/>
                        <button type="submit" className="
                            bg-cyan-300 
                            rounded-md 
                            text-black 
                            font-semibold 
                            p-2 
                            transition-colors 
                            hover:bg-white">Enviar</button>
                    </Form>
                )
            }}
        </Formik>
    );
};

export default PokemonsForm;
