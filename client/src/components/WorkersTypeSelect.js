import React from 'react'

function WorkersTypeSelect(props, ref) {

    function workerTypeChange(e) {
        ref.current.value = e.target.value
    }

    return (
        <div>
            {
                !props.workersType ? (
                    <label> No Worker Types</label>
                ) : (
                    props.workersType && <select className="browser-default custom-select" defaultValue={props.defaultValue}
                        ref={ref} onChange={workerTypeChange}>
                        {
                            props.workersType.map((type) => {
                                return <option key={type.id} value={type.id}>{type.type}</option>
                            })
                        }
                    </select>
                )
            }
        </div>
    )
}

export default React.forwardRef(WorkersTypeSelect)

