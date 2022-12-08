const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			beanSpecials: [],
			beanElectronics: [],
			beanHomegoods: [],
			filteredSpecials:[],
			beanBudgetList:[
				// {"name": "item1", "value":5},
				// {"name": "item1", "value":7}
			],
			notHome: false,
			allData: [],
			beanCart:[
				// {"name": "item1", "value":5},
				// {"name": "item2", "value":7}
			],
			// allItems:[],
			token: null,
			isLoggedIn: false,
			newUser: false,
		},
		actions: {
			putInFiltered: (array) => {
				const store = getStore();
				let filtered = array
				setStore({filteredSpecials: filtered})
			},
			handleNewUserTrueOrFalse: (e) => {
				let newUser = getStore().newUser
				newUser = e
				setStore({newUser:newUser})
			},
			handleIsLoggedInTrueOrFalse: (e) => {
				let isLoggedIn = getStore().isLoggedIn
				isLoggedIn = e
				setStore({isLoggedIn:isLoggedIn})
			},

			handleCartItemDelete: (idx) => {
				const cart = getStore().beanCart
				let filtered = cart.filter((f, i) => i !== idx)
				setStore({beanCart: filtered})
			},

			addToCart: (name, value) => {
				console.log(name, value);
				let item = {
					"name": name,
					"value": value
				}
				getStore().beanCart.push(item)
				setStore({beanCart: getStore().beanCart})
			},
			handleItemDelete: (idx) => {
				const beanBudgetList = getStore().beanBudgetList
				let filtered = beanBudgetList.filter((f, i) => i !== idx)
				setStore({beanBudgetList: filtered})
			},

			addToBudget: (name, value) => {
				console.log(name, value);
				let item = {
					"name": name,
					"value": value
				}
				getStore().beanBudgetList.push(item)
				setStore({beanBudgetList: getStore().beanBudgetList})
			},

			syncTokenFromSessionStore: () => {
				const token = sessionStorage.getItem('token');
				if(token && token !="" && token !=undefined) setStore({ token: token});
			},

			logout: () => {
				const token = sessionStorage.removeItem("token");
				setStore({ token: null, isLoggedIn: false });
				//redirect here
				
			  },
			// LogIn ----------------------------------------------------------------------------------------
			login: async (email, password) => {
				const opts = {
				  method: "POST",
				  mode: "cors",
				  headers: {
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*",
					// "Access-Control-Allow-Headers": "Origin",
					//"X-Requested-With, Content-Type": "Accept",
				  },
				  body: JSON.stringify({
					email: email,
					password: password,
				  }),
				};
				try {
				  const resp = await fetch(
					"https://3001-rayferg-shopsmart-86o31b7ztig.ws-us77.gitpod.io/api/login",
					opts
				  );
				  if (resp.status !== 200) {
					alert("there has been an error");
					return false;
				  }
				  const data = await resp.json();
				  console.log(data);
				  if (data.msg) {
					setStore({ message: data.msg });
				  } else {
					sessionStorage.setItem("token", data.access_token);
					setStore({ token: data.access_token, isLoggedIn: true});
				  }
		
				  return true;
				} catch (error) {
				  console.error("there was an error", error);
				}
			  },
			
			// add user ------------------------------------------------------------------------------------------------------------------
			createUser: async (Uname, Remail, Rpassword) => {
				const opts = {
					method: "POST",
					mode: "cors",
					headers: {
					  "Content-Type": "application/json",
					  "Access-Control-Allow-Origin": "*",
					//   "Access-Control-Allow-Headers": "Origin",
					//   "X-Requested-With, Content-Type": "Accept",
					},
					body: JSON.stringify({
					  Uname: Uname,
					  email: Remail,
					  password: Rpassword,
					}),
				};
				try {
					const resp = await fetch(
					  "https://3001-rayferg-shopsmart-86o31b7ztig.ws-us77.gitpod.io/api/createUser",
					  opts
					);
					if (resp.status !== 200) {
					  alert("there has been an error");
					  return false;
					}
					const data = await resp.json();
					console.log(data);
					if (data.status == "true") {
						//rederect to login
						setStore({newUser: false, isLoggedIn: false})
					  } else {
						setStore({ message: data.msg });
					  }

					return true;
				  } catch (error) {
					console.error("there was an error", error);
				  }
			},
			// GETTING THE CONTENT --------------------------------------------
			loadBeanShop: () => {
				const store = getStore();
				const opts = {
					method: "GET",
					mode: "cors",
					headers: {
					  "Content-Type": "application/json",
					  "Access-Control-Allow-Origin": "*",
					  //"Access-Control-Allow-Headers": "Origin",
					  //"X-Requested-With, Content-Type": "Accept",
					},
				}
				// fetch people from CustomContent
				fetch('customContent.json', opts)
				.then((response) => response.json())
				.then((data) => {
					console.log(data);
					let specials = data.specials
					let electronics = data.Electronics
					let homegoods = data.HomeGoods
					let toys = data.Toys
					let myArr = specials
								.concat(electronics)
								.concat(homegoods)
								.concat(toys)
					console.log(myArr);
					// myArr.concat(data.electronics)

					setStore({allData:myArr})
					// store.allData.push(electronics)

					setStore({beanSpecials:specials, beanElectronics:electronics, beanHomegoods:homegoods})
					// setStore({allItems:specials, electronics, homegoods})
				})
				.catch((error) => {
					//error handling
					console.log('There is an error on the fetch at flux', error);
				});
			},
			getSpecials: (idx) => {
				const special = getStore().beanSpecials;
				return special[idx];
			},
			getElectronics: (idx) => {
				const special = getStore().beanElectronics;
				return special[idx];
			},
			getHomeGoods: (idx) => {
				const special = getStore().beanHomegoods;
				return special[idx];
			},
			notHomeTrueOrFalse: (e) => {
				let notHome = getStore().notHome
				notHome = e
				setStore({notHome:notHome})
			},
		}
	};
};

export default getState;
