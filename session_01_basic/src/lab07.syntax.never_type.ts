/**
 * * never - is return type of Exception function (return or not return)
 */

const show_error = (message : string) : never => {
    console.log('-- start show err')
    throw new Error(message)
    console.log('-- end show err')
  }
  
  const calculate = () => {
    try {
        console.log('-- start calculation')
      show_error('Something is failed')
        console.log('-- end calculation')
    } catch (e) {
      console.error(e)
    }
  }
  
  calculate()