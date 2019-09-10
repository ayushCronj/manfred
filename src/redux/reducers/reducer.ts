
interface IState {
  dataSource:any  
  }
  
  const initialState: IState = {
   dataSource:[{
    key: "1",
    title: "Mr.",
    name: "Petr",
    surname: "petr",
    email: "peter@gmail.com",
    link: "/user.png",
    client: "foreway",
    department: "sytemAdministrator",
    phoneNumber: "1234567890",
    Language: "English",
    TimeZone: "UTC",
    UnitSystem: "Metric"
  },
  {
    key: "2",
    title: "Mr",
    name: "John",
    surname: "petr",
    email: "john@gmail.com",
    link: "/user.png",
    client: "foreway",
    department: "sytemAdministrator",
    phoneNumber: "1234567890",
    Language: "English",
    TimeZone: "UTC",
    UnitSystem: "Metric"
  }]
  };

  export default function aois(
    state: IState = initialState,
    action: any
  ): IState {
    const { type, payload } = action;
  
    switch (type) {
      case 'DELETE_USER':
        {const newlist = [...state.dataSource];
          newlist.splice(action.payload,1);
          return{
          ...state,
          dataSource: newlist
          }
        }
        case 'EDIT_USER':
            {const newlistUser = [...state.dataSource];
              console.log("cation-->",action)
     
              newlistUser.forEach((items, i) => {
                if (i === action.editindex) {
                  newlistUser[i] = action.payload
                  
                }
              })
                console.log("newlistUser---->",newlistUser)
              return{
                ...state,
                dataSource: newlistUser
                }
              }
        case 'CREATE_USER':
            return {...state,dataSource:[action.payload,...state.dataSource]}


     default:
    return state;
  }
}
