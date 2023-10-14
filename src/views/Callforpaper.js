import React from 'react';
// import section header
import SectionHeader from '../components/sections/partials/SectionHeader';
// import sections
import HeroFull from '../components/sections/HeroFull';
import Team from '../components/sections/Team';
import Roadmap from '../components/sections/Roadmap';
import Testimonial from '../components/sections/Testimonial';
import GenericSection from '../components/sections/GenericSection';
import Cta from '../components/sections/Cta';
// import some required elements
import Image from '../components/elements/Image';
import Input from '../components/elements/Input';
import ButtonGroup from '../components/elements/ButtonGroup';
import Button from '../components/elements/Button';
import Modal from '../components/elements/Modal';
import Accordion from '../components/elements/Accordion';
import AccordionItem from '../components/elements/AccordionItem';
import classNames from "classnames";
import ImportantDate from "../components/sections/ImportantDate";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container/Container";
import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import {submissionfullLink,submissionabstractLink} from "../utils/ulti";

class Callforpaper extends React.Component {

    render() {
        const {
            className,
            topOuterDivider,
            bottomOuterDivider,
            topDivider,
            bottomDivider,
            hasBgColor,
            invertColor,
            ...props
        } = this.props;

        const genericSection04Header = {
            title: 'Paper Submission'
        };
        return (
            <React.Fragment>
                {/*<CssBaseline/>*/}
                <Container maxWidth="lg">

                    <GenericSection>
                        <h2>Call for Papers</h2>
                        <p>The purpose of the 4<sup >th</sup> ICEBA2023 is to link the researchers and scientists from Vietnam, Australia, and Asian countries in the field of Engineering Physics and microelectronics and semiconductors for their applications in biomedical engineering, health sciences, hi-tech agriculture, and smart cities.  Besides, we also contribute to promoting international cooperation activities on joint research projects and international co-publications.</p>

                        <p>ICEBA2023 will be hosted at VNUHCM-University of Science, Ho Chi Minh city, Vietnam.</p>

                        <p>Authors are invited to submit original, unpublished research manuscripts related to
                            conference subjects.</p>

                        <p>Authors of accepted papers can opt into reproducible research decoration to publish according
                            to open science conventions; the details are described below.</p>

                    </GenericSection>
                    <GenericSection topDivider>
                        <h2>Topics of interest include (but not limited to)</h2>
                        <ul>
                            <li>Applied Physics, Engineering Physics, Electronic Engineering and Nuclear Engineering;
                            </li>
                            <li>MEMS (MicroElectronMechanical System), Sensors, Biosensors and semiconducting devices;
                            </li>
                            <li>Microelectronics, IC design, low consumption devices, Renewable Energy;</li>
                            <li>Computing Science, Simulations and Modeling;</li>
                            <li>Embedded systems, Internet of Things, Machine Learning, Artificial Intelligence;</li>
                            <li>Biomedical Engineering, Digital Microfluidics and their applications;</li>
                            <li>...</li>
                        </ul>
                    </GenericSection>
                    <GenericSection topDivider>
                        <h2>Paper Submission</h2>
                        {/*<p>*/}
                        {/*    Submitted manuscripts must represent original unpublished research that is not currently*/}
                        {/*    under review for any other conference or journal. Manuscripts are submitted in PDF format*/}
                        {/*    and may not exceed ten (10) single-spaced double-column pages using 10-point size font on*/}
                        {/*    8.5x11 inch pages (IEEE conference style), including figures, tables, and references. The*/}
                        {/*    limit is six (6) pages for workshop papers.*/}
                        {/*</p>*/}
                        {/*<p>*/}
                        {/*    All manuscripts will be reviewed and judged on correctness, originality, technical strength,*/}
                        {/*    rigor in analysis, quality of results, quality of presentation, and interest and relevance*/}
                        {/*    to the conference attendees.*/}
                        {/*</p>*/}
                        {/*<p>*/}
                        {/*    Formatting: <a href={"https://www.ieee.org/conferences/publishing/templates.html"}*/}
                        {/*                   target={"_blank"}>https://www.ieee.org/conferences/publishing/templates.html</a>*/}
                        {/*</p>*/}
                        <p>
                            Click here to submit: <Button color="primary"
                                                          style={{marginLeft:5,marginRight:5}}
                                                          tag={"a"} target="_blank"
                                                          href={submissionabstractLink}>ABSTRACT</Button>
                      <Button color="primary"
                                                          style={{marginLeft:5,marginRight:5}}
                                                          tag={"a"} target="_blank"
                                                          href={submissionfullLink}>FULL PAPER</Button>
                        </p>
                    </GenericSection>

                    <GenericSection topDivider>
                        <h2>Publications</h2>
                        <p><strong>The selected papers (from 4 to 8 pages)</strong> will be reviewed or recommended for publication in one of the below Scopus/SCIE/Scimago database Journal with your payment, such as:</p>
                        <ol style={{marginLeft:20}}>
                            <li>IEEJ Transactions on Electrical and Electronic Engineering (Scopus, Q3)</li>
                            <li>IEEJ Transactions on Sensors and Micromachines (Scopus, Q4)</li>
                            <li>Applied Sciences (MDPI, Scopus, IF: 2.9, Q1/Q2)</li>
                            <li>Nanomaterials (MDPI, Scopus, IF:5.3, Q1)</li>
                        </ol>
                    </GenericSection>

                    <GenericSection>

                        <ImportantDate topDivider className="gradient-section" style={{paddingTop: 0}}
                                       topOuterDivider={false}/>

                    </GenericSection>


                </Container>
            </React.Fragment>
        );
    }
}

// inline style
const formStyle = {
    maxWidth: '420px',
    margin: '0 auto'
}

export default Callforpaper;
