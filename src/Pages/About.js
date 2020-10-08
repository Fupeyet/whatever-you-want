import React, { Component } from 'react'
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap'

export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">One more</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Whatever you want</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="four">Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="five">Libraries</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="six">Frameworks</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}></Col>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <img src="https://i.ytimg.com/vi/brveQGvr7Ro/hqdefault.jpg"/>
                                    <p>
                                        What do you want?)
                                        — Есть машина?
                                        — Ща будет.
                                        Отошли от машины! А, это не моя машина... У меня вообще нет машины.
                                        Всё, мужики, не мешаю, всё. Серёг! А, у меня же нет Серёги.
                                        Их там целая стая
                                        Подболотники
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src="https://vignette.wikia.nocookie.net/lapenkopedia/images/7/79/Roza-robot.jpg/revision/latest/scale-to-width-down/340?cb=20200722084750&path-prefix=ru"/>
                                    <p>
                                        What do you want?)
                                        — Есть машина?
                                        — Ща будет.
                                        Отошли от машины! А, это не моя машина... У меня вообще нет машины.
                                        Всё, мужики, не мешаю, всё. Серёг! А, у меня же нет Серёги.
                                        Их там целая стая
                                        Подболотники
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src="https://vignette.wikia.nocookie.net/lapenkopedia/images/e/e5/EWYY2dlWkAEm2zo.jpg/revision/latest/scale-to-width-down/310?cb=20200719151116&path-prefix=ru"/>
                                    <p>
                                        What do you want?)
                                        — Есть машина?
                                        — Ща будет.
                                        Отошли от машины! А, это не моя машина... У меня вообще нет машины.
                                        Всё, мужики, не мешаю, всё. Серёг! А, у меня же нет Серёги.
                                        Их там целая стая
                                        Подболотники
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="four">
                                    <img src="https://vignette.wikia.nocookie.net/lapenkopedia/images/c/c8/5zzLfQm1_400x400.jpg/revision/latest/scale-to-width-down/310?cb=20200722112140&path-prefix=ru"/>
                                    <p>
                                        What do you want?)
                                        — Есть машина?
                                        — Ща будет.
                                        Отошли от машины! А, это не моя машина... У меня вообще нет машины.
                                        Всё, мужики, не мешаю, всё. Серёг! А, у меня же нет Серёги.
                                        Их там целая стая
                                        Подболотники
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="five">
                                    <img src="https://vignette.wikia.nocookie.net/lapenkopedia/images/3/3f/ETDcGutXkAAcn4l.jpg/revision/latest/scale-to-width-down/310?cb=20200724141001&path-prefix=ru"/>
                                    <p>
                                        What do you want?)
                                        — Есть машина?
                                        — Ща будет.
                                        Отошли от машины! А, это не моя машина... У меня вообще нет машины.
                                        Всё, мужики, не мешаю, всё. Серёг! А, у меня же нет Серёги.
                                        Их там целая стая
                                        Подболотники
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="six">
                                    <img src="https://vignette.wikia.nocookie.net/lapenkopedia/images/4/42/EYAcxqkXgAk4Zau.jpg/revision/latest/scale-to-width-down/310?cb=20200723215338&path-prefix=ru"/>
                                    <p>
                                        What do you want?)
                                        — Есть машина?
                                        — Ща будет.
                                        Отошли от машины! А, это не моя машина... У меня вообще нет машины.
                                        Всё, мужики, не мешаю, всё. Серёг! А, у меня же нет Серёги.
                                        Их там целая стая
                                        Подболотники
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                    </Row>    
                </Tab.Container>
            </Container>
        )
    }
}
