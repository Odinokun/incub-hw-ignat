import React, {useState} from 'react'
import Affairs from './affairs/Affairs'
import s2 from '../../s1-main/App.module.css'

// types
export type AffairPriorityType = 'low' | 'middle' | 'high'
export type AffairType = {
  _id: number
  name: string
  priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [
  {_id: 1, name: 'React', priority: 'high'},
  {_id: 2, name: 'beer', priority: 'low'},
  {_id: 3, name: 'games', priority: 'low'},
  {_id: 4, name: 'work', priority: 'high'},
  {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
  if (filter === 'all') {
    return affairs
  } else {
    return affairs.filter(a => a.priority === filter);
  }
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => {
  return affairs.filter(a => a._id !== _id);
}

function HW2() {
  const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs)
  const [filter, setFilter] = useState<FilterType>('all')

  const filteredAffairs = filterAffairs(affairs, filter)
  const deleteAffairCallback = (_id: number) => {
    const newAffairs = deleteAffair(affairs, _id);
    setAffairs(newAffairs)
  }

  return (
    <div id={'hw2'}>
      <div className={s2.hwTitle}>Homework #2</div>
      <div className={s2.hw}>
        <Affairs
          data={filteredAffairs}
          setFilter={setFilter}
          deleteAffairCallback={deleteAffairCallback}
          filter={filter}
        />
      </div>
    </div>
  )
}

export default HW2
