// Write your code here
import {
  BarChart,
  XAxis,
  YAxis,
  Bar,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {vaccinationCoverage} = props

  const modifiedVaccinationDetails = vaccinationCoverage.map(
    eachVaccination => ({
      dose1: eachVaccination.dose_1,
      dose2: eachVaccination.dose_2,
      vaccineDate: eachVaccination.vaccine_date,
    }),
  )

  const dataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="coverage-container">
      <h1 className="chart-heading">Vaccination Coverage</h1>
      <ResponsiveContainer width={1000} height={300}>
        <BarChart data={modifiedVaccinationDetails}>
          <XAxis
            dataKey="vaccineDate"
            tick={{stroke: 'gray', strokeWidth: 1}}
          />
          <YAxis
            tickFormatter={dataFormatter}
            tick={{stroke: 'gray', strokeWidth: 0}}
          />
          <Legend
            wrapperStyle={{padding: 30}}
            iconType="Square"
            layout="horizontal"
            align="center"
          />
          <Bar dataKey="dose1" name="Dose 1" fill="#5a8dee" />
          <Bar dataKey="dose2" name="Dose 2" fill="#f54394" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationCoverage
