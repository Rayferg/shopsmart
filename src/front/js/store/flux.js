const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			beanSpecials: [],
			beanElectronics: [],
			beanHomegoods: [],
			beanBeauty:[],
			beanToys:[],

			filteredSpecials:[],
			beanBudgetList:[],
			notHome: false,
			allData: [],
			beanCart:[],
			values: {'total': 0, 'left': 0},
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
				let v = {
					"total": getStore().values.total,
					"left": getStore().values.total - filtered.reduce(function (acc, obj) { return acc + parseFloat(obj.value); }, 0)
				}
				console.log(v.left);
				setStore({beanBudgetList: filtered, values: v})
			},
			handleBudget: (value) => {
				let v = {
					"total": value,
					"left": value - getStore().beanBudgetList.reduce(function (acc, obj) { return acc + parseFloat(obj.value); }, 0)
				}
				setStore({values: v})
			},
			addToBudget: (name, value) => {
				console.log(name, value);
				let item = {
					"name": name,
					"value": value
				}
				getStore().beanBudgetList.push(item)
				let v = {
					"total": getStore().values.total,
					"left": getStore().values.total - getStore().beanBudgetList.reduce(function (acc, obj) { return acc + parseFloat(obj.value); }, 0)
				}
				setStore({beanBudgetList: getStore().beanBudgetList, values: v})
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
					"https://3001-rayferg-shopsmart-7qs958yarjg.ws-us78.gitpod.io/api/login",
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
					  "https://3001-rayferg-shopsmart-7qs958yarjg.ws-us78.gitpod.io/api/createUser",
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
				fetch('https://nice-cyan-vulture-cap.cyclic.app/products', opts)
				.then((response) => response.json())
				.then((data) => {
					console.log(data);
					let specials = data.specials
					console.log(specials);
					let electronics = data.Electronics
					let homegoods = data.HomeGoods
					let pets = data.Pets
					let beauty = data.Beauty
					let toys = data.Toys
					let myArr = specials
								.concat(electronics)
								.concat(homegoods)
								.concat(toys)
								.concat(pets)
								.concat(beauty)

					console.log(myArr);
					// myArr.concat(data.electronics)

					setStore({allData:myArr})
					// store.allData.push(electronics)

					setStore({
								beanSpecials:specials, 
								beanElectronics:electronics, 
								beanHomegoods:homegoods,
								beanBeauty:beauty,
								beanToys:toys
							})
					// setStore({allItems:specials, electronics, homegoods})
				})
				.catch((error) => {
					//error handling
					console.log('There is an error on the fetch at flux', error);
				});
			},
			getSpecials: (idx) => {
				const special = getStore().beanSpecials;
				console.log(special[idx]);
				return special[idx];
			},
			getElectronics: (idx) => {
				const electronics = getStore().beanElectronics;
				return electronics[idx];
			},
			getHomeGoods: (idx) => {
				const homegoods = getStore().beanHomegoods;
				return homegoods[idx];
			},
			getBeauty: (idx) => {
				const beauty = getStore().beanBeauty;
				return beauty[idx];
			},
			getToys: (idx) => {
				const toys = getStore().beanToys;
				return toys[idx];
			},
			getAllData: (idx) => {
				const data = getStore().filteredSpecials;
				return data[idx];
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
