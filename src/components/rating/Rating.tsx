import React from "react"
import globalStyles from "../globalStyles.module.css"
import style from "./raiting.module.css"

import lmpf from "../../static/images/raiting/lmpf.png"
import ruward_black from "../../static/images/raiting/ruward_black.png"
import ruward_white from "../../static/images/raiting/ruward_white.png"
import tagline_white from "../../static/images/raiting/tagline_white.png"
import tagline_black from "../../static/images/raiting/tagline_black.png"
import { Card } from "./Card"
import classnames from "classnames"

export const Raiting = () => {

    return (
        <div className={classnames(globalStyles.globalContainer, style.main)}>
            <h1 className={globalStyles.title}>Мы в рейтингах</h1>
            <h3 className={classnames(globalStyles.subtitle, style.subtitle)}>Несколько лет подряд, наша команда входит в топы Российских и международных рейтингов разработчиков</h3>
            <div className={style.awardsContainer}>
                <div className={style.wrapper}>
                    <div className={style.conatiner}>
                        <Card
                          alt={"tagline"}
                          description={"В рейтинге разработчиков"}
                          image_balck={tagline_black}
                          image_white={tagline_white}
                          subtitle={"41 место"}
                          title={"ТОП 50"}
                          classname={style.card}
                        />
                        <Card
                          alt={"tagline"}
                          description={"В рейтинге аутсорсеров"}
                          image_balck={tagline_black}
                          image_white={tagline_white}
                          subtitle={"39 место"}
                          title={"ТОП 50"}
                          classname={style.card}
                        />
                        <Card
                          alt={"ruward"}
                          description={"Мобильная разработка на субподряде"}
                          image_balck={ruward_black}
                          image_white={ruward_white}
                          subtitle={"29 место"}
                          title={"ТОП 30"}
                          classname={style.card}
                        />
                        <Card
                            alt={"ruward"}
                            description={"Разработка с использованием блокчейн-технологий"}
                            image_balck={ruward_black}
                            image_white={ruward_white}
                            subtitle={"16 место"}
                            title={"ТОП 20"}
                            classname={style.card}
                        />
                    </div>
                </div>
                <div className={style.wrapper}>
                    <div className={style.conatiner}>
                        <Card
                            alt={"tagline"}
                            description={"В рейтинге разработчиков"}
                            image_balck={tagline_black}
                            image_white={tagline_white}
                            subtitle={"41 место"}
                            title={"ТОП 50"}
                            classname={style.card}
                        />
                        <Card
                            alt={"ruward"}
                            description={"Разработка с использованием блокчейн-технологий"}
                            image_balck={ruward_black}
                            image_white={ruward_white}
                            subtitle={"16 место"}
                            title={"ТОП 20"}
                            classname={style.card}
                        />
                        <Card
                            alt={"tagline"}
                            description={"В рейтинге аутсорсеров"}
                            image_balck={tagline_black}
                            image_white={tagline_white}
                            subtitle={"39 место"}
                            title={"ТОП 50"}
                            classname={style.card}
                        />
                        <Card
                            alt={"lmfp"}
                            description={"Лига мини футбола Приднестровья"}
                            image_balck={lmpf}
                            image_white={lmpf}
                            subtitle={"Лига С"}
                            title={"1 МЕСТО"}
                            classname={style.card}
                        />
                </div>
              </div>
            </div>
        </div>
    )
}