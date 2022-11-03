import React from "react";
import axios from "axios";

const Login = ({
	setUsername,
	setPassword,
	username,
	password,
}: {
	setUsername: React.Dispatch<React.SetStateAction<string>>;
	setPassword: React.Dispatch<React.SetStateAction<string>>;
	username: string;
	password: string;
}) => {
	const baseURL = "https://netzwelt-devtest.azurewebsites.net/Account/SignIn";
	let handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// axios
		// 	.post(baseURL, {
		// 		username: username,
		// 		password: password,
		// 	})
		// 	.then((response) => {
		// 		console.log(response);
		// 	});
		try {
			let res = await fetch(baseURL, {
				method: "POST",
				headers: {
					accept: "text/plain",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					username: username,
					password: password,
				}),
			});
			let resJson = await res.json();
			if (res.status === 200) {
				setUsername("");
				setPassword("");
				console.log(resJson);
				console.log("success");
				// setMessage("User created successfully");
			} else {
				// setMessage("Some error occured");
			}
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<section className="bg-gray-50 dark:bg-gray-900">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
							Sign in to your account
						</h1>
						<form className="space-y-4 md:space-y-6" action="#" onSubmit={(e) => handleSubmit(e)}>
							<div>
								<label
									htmlFor="email"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Your username
								</label>
								<input
									type="text"
									name="username"
									id="username"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="username"
									required
								/>
							</div>
							<div>
								<label
									htmlFor="password"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Password
								</label>
								<input
									type="password"
									name="password"
									id="password"
									placeholder="••••••••"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									autoComplete="current-passsword"
									required
								/>
							</div>
							<button
								type="submit"
								className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
							>
								Sign in
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
