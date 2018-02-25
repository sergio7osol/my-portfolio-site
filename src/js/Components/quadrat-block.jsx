import React from 'react';
import PropTypes from 'prop-types';

class QuadratBlock extends React.Component {
    render() {
        return (
            <div className="colored-squares">
                <h3>Resultat: {this.props.res}</h3>
                <ul>
                    {["#f00", "#0f0", "#00f", "#7d3", "#f6e"].map((v, i) => {
                        return <li className="colored-squares__item" style={{ backgroundColor: v }} key={i} data-order={i}>{i}</li>;
                    })}
                </ul>
            </div>
        );
    }
};

QuadratBlock.propTypes = {
    res: number,
    numberOfSquares: PropTypes.array
};

export default QuadratBlock;