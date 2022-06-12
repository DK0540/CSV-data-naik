import React, {CSVReader} from 'react'
import ReactDOM from 'react-dom'


const CsvRead = () => {
  return (
    <div>
        <CSVReader
        cssClass="csv-reader-input"
        label="Select CSV with secret Death Star statistics"
        onFileLoaded={this.handleForce}
        onError={this.handleDarkSideForce}
        inputId="ObiWan"
        inputStyle={{color: 'red'}}
      />
      hh
    </div>
  )
}

export default CsvRead
