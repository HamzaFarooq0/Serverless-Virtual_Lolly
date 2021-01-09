/* import React, { useRef, useState } from 'react';
import { Link } from 'gatsby';
import Header from '../components/Header';
import { Grid, Button } from '@material-ui/core';
import Lolly from '../components/Lolly';
import { useFormik } from 'formik';
import './style.css';

const CreateLolly = () => {
	const [ color_1, setColor_1 ] = useState('#d52358');
	const [ color_2, setColor_2 ] = useState('#e95946');
	const [ color_3, setColor_3 ] = useState('#deaa43');

	const recepient_field= useRef();
	const message_field = useRef();
	const sender_field = useRef();

	// const FormValidation = Yup.object({
	// 	to: Yup.string().min(2, "Too short").max(15, 'Too long').required('Required'),
	// 	message: Yup.string().required('Required'),
	// 	from: Yup.string().min(2, "Too short").max(15, 'Too long').required('Required'),
	// })

	const formik = useFormik({
		initialValues: {
			recepient: "",
			message: "",
			sender: "",
		},
		onSubmit: () => {

		},
		validate: (values) => {
			let error = {}

      if (!values.recepient_field)
        error.recepient_field = "recField is required"
      if (!values.message_field)
        error.message_field = "msgField is required"
      if (!values.sender_field)
        error.sender_field = "senderField is required"

      return error
		}
	})

	const handleSend = () => {}

	return (
		<div className="homepage-container">
		
			<div>
				<Link to="/">
					<Header
						head="Virtual Lolly"
						head_class="heading"
						para="because we all know someone who deserve some sugar!"
						para_class="sub-heading"
					/>
				</Link>
			</div>

			<div className="data-container">
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6}>
						<div className="lollyContainer">
							
							<Lolly top={color_1} middle={color_2} bottom={color_3} />

							
							<div className="colorInputs">
								<label htmlFor="top" className="colorPickerLabel">
									<input
										type="color"
										name="top"
										className="colorPicker"
										value={color_1}
										onChange={(e) => setColor_1(e.target.value)}
									/>
								</label>
								<label htmlFor="middle" className="colorPickerLabel">
									<input
										type="color"
										name="middle"
										className="colorPicker"
										value={color_2}
										onChange={(e) => setColor_2(e.target.value)}
									/>
								</label>
								<label htmlFor="bottom" className="colorPickerLabel">
									<input
										type="color"
										name="bottom"
										className="colorPicker"
										value={color_3}
										onChange={(e) => setColor_3(e.target.value)}
									/>
								</label>
							</div>
						</div>
					</Grid>

					<Grid item xs={12} sm={6}>
						<div className="form-container">
							<form onSubmit={formik.handleSubmit}>
								<label htmlFor="to">To:</label>
								<input autoComplete="off" className="form-control text-field" type="text" onChange={formik.handleChange} name="recepient" ref={recepient_field} />
								{formik.errors.recepient_field ? <div className="error">{formik.errors.recepient_field}</div> : null}
							
								<br />

								<label htmlFor="message">Message</label>
								<textarea autoComplete="off" className="form-control text-field" type="text" onChange={formik.handleChange} name="message" ref={message_field} />
								{formik.errors.recField ? <div className="error">{formik.errors.message_field}</div> : null}

								<br />

								<input autoComplete="off" className="form-control text-field" type="text" onChange={formik.handleChange} name="sender" ref={sender_field} />
								{formik.errors.sender_field ? <div className="error">{formik.errors.sender_field}</div> : null}
							
								<Button type="submit" className="btn btn-dark" onClick={handleSend}>Freez It</Button>

							</form>
						</div>
					</Grid>
				</Grid>
			</div>
		</div>
	);
};

export default CreateLolly;
 */