import React from "react"
import "./App.css"

const App = () => {

  const [data, setData] = React.useState(["Loading data..."])
  const [add, setAdd] = React.useState(true)
  const [del, setDel] = React.useState(true)
  const [alert, setAlert] = React.useState("")

  const addItem = ()=>{

    const txt = document.getElementById("txt").value
    setData([...data, txt])
    setAdd(!add)
  }
  const delItem = (index)=>{

    const newData = [...data]
    newData.splice(index, 1)
    setData(newData)
    setDel(!del)
  }

  React.useEffect(()=>{
    setTimeout(()=>{
      setData([])
    }, 2000)
  }, [])

  React.useEffect(()=>{
    if(!add){
      setAlert(<div className="alert alert-success">Added successfully !</div>)
      setAdd(!add)
    }
    setTimeout(()=>{
      setAlert("")
    }, 2000)
  }, [add])

  React.useEffect(()=>{
    if(!del){
      setAlert(<div className="alert alert-danger">Deleted successfully !</div>)
      setDel(!del)
    }
    setTimeout(()=>{
      setAlert("")
    }, 2000)
  }, [del])

  return (
    <>
      <div id="header">
        <p id="header-text">TODOLIST</p>
      </div>
      <div id="body">
        <div class="container">
          <h3>Todolist</h3>
          <div id="main" class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <div id="add" class="text-center">
                <form class="form-inline">
                  <div class="form-group mb-2">
                    <input id="txt" type="text" class="form-control mr-2" placeholder="Course name" />
                  </div>
                  <button onClick={addItem} type="button" class="btn btn-primary mb-2">Add Course</button>
                </form>
              </div>
              {alert}
              <table id="list" class="table">
                {
                  data.map((item, index) =>
                    <tr>
                      <td><input type="checkbox" /></td>
                      <td>{item}</td>
                      <td><a onClick={()=>delItem(index)} href="#">delete</a></td>
                    </tr>
                  )
                }

              </table>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default App