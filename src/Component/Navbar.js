import React from 'react'

export default function Navbar() {
    return (
        <div className='container-fluid  '>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className='d-flex collapse navbar-collapse justify-content-between align-items-center'>
                    <p className='pl-3 navbar-brand '>COVID 19 Tracker</p>
                    <div className='container'>

                    </div>
                </div>
            </nav>

        </div>
    )
}
