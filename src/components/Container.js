import React from "react";
import Banner from "./Banner";
import Form from "./Form";

const Container = () => {
    return (
        <div className="Container">
            <div className="sing__up__header">
                <h1>Learn to code by watching others</h1>
                <p>
                    See how experienced developers solve problems in real-time.
                    Watching scripted tutorial is great, but understanding how
                    developers think is invaluable
                </p>
            </div>
            <div className="sing__up__body">
                <Banner />
                <Form />
            </div>
        </div>
    );
};

export default Container;
