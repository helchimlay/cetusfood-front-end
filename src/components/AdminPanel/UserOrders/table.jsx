<table className='main-table'>
                        <thead>
                            <tr>
                                <th>Lp.</th><th></th>
                                {Object.keys(data[0]).map((key, i) => dontShow.includes(key) || (
                                    <th key={i}>
                                        {key}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((el, i) => <ListEl key={i} i={i} setData={setData} data={el} dontShow={dontShow} />)}
                        </tbody>
                    </table>
                </>) : <p>Brak danych do wyświetlenia</p>}

            </div>