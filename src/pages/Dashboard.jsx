
import * as React from 'react';

import {
    ExpansionPanel,
    ExpansionPanelContent,
    } from "@progress/kendo-react-layout"
import { Reveal } from "@progress/kendo-react-animation";
import ListViews from '../components/ListView';
import PieChart from '../components/PieChart';
import LineChart from '../components/LineChart';

import { useLocalization } from '@progress/kendo-react-intl';
import { filterBy } from '@progress/kendo-data-query';

import { Grid, Column, ColumnMenu } from './../components/Grid';
import { FullNameCell, FlagCell, OnlineCell, RatingCell, EngagementCell, CurrencyCell } from './../components/GridCells';

import { AppContext } from './../AppContext'

import { employees } from './../resources/employees';
import { teams } from './../resources/teams';
import { orders } from './../resources/orders';

const Dashboard = () => {
    const [data, setData] = React.useState(employees);
    const [isTrend, setIsTrend] = React.useState(true);
    const [isMyTeam, setIsMyTeam] = React.useState(true);
    const localizationService = useLocalization();

    const isChartChangeRef = React.useRef(false);
    const onChartRefresh = React.useCallback(
        () => null,
        []
    );

    React.useEffect(() => {
        isChartChangeRef.current = false;
    });

    const { teamId } = React.useContext(AppContext);
    const gridFilterExpression = isMyTeam ? {
            logic: "and",
            filters: [{ field: "teamId", operator: "eq", value: teamId }]
        } : null;

const sideBarData = [{
    id: 'Fund Manager',
    title: 'Fund Managers',
    subTitle: 'South America',
    imageUrl: 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/assets/countries/brazil.jpg',
    text: 'The word “Brazil” likely comes from the Portuguese word for brazilwood, a tree that once grew plentifully along the Brazilian coast. In Portuguese, brazilwood is called pau-brasil, with the word brasil commonly given the etymology “red like an ember”, formed from brasa (“ember”) and the suffix -il (from -iculum or -ilium). As brazilwood produces a deep red dye, it was highly valued by the European textile industry and was the earliest commercially exploited product from Brazil. Throughout the 16th century, massive amounts of brazilwood were harvested by indigenous peoples (mostly Tupi) along the Brazilian coast, who sold the timber to European traders (mostly Portuguese, but also French) in return for assorted European consumer goods.'
    }, {
    id: 'Fund Details',
    title: 'Fund Details',
    subTitle: 'South America',
    imageUrl: 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/assets/countries/chile.jpg',
    text: `There are various theories about the origin of the word Chile. According to 17th-century Spanish chronicler Diego de Rosales, the Incas called the valley
            of the Aconcagua Chili by corruption of the name of a Picunche tribal chief (cacique) called Tili, who ruled the area at the time of the Incan conquest in the 15th century. Another theory points to the similarity of the valley of the Aconcagua with that of the Casma Valley in Peru, where there was a town and valley named Chili.`
    }, {
    id: 'Q1 2021',
    title: 'Q1 2021',
    subTitle: 'South America',
    imageUrl: 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/assets/countries/colombia.jpg',
    text: 'The name “Colombia” is derived from the last name of the Italian navigator Christopher Columbus. It was conceived by the Venezuelan revolutionary Francisco de Miranda as a reference to all of the New World, but especially to those portions under Spanish law. The name was later adopted by the Republic of Colombia of 1819, formed from the territories of the old Viceroyalty of New Granada (modern-day Colombia, Panama, Venezuela, Ecuador, and northwest Brazil).'
    }];

    const [expanded, setExpanded] = React.useState("Fund Manager");

    return (
        <div id="Dashboard" className="dashboard-page main-content" style={{marginTop: "1rem"}}>
            <div className="row">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <div className="col-2">
                <div className="wrapper">
                    {sideBarData.map((item) => (
                        <ExpansionPanel
                        title={item.title}
                        expanded={expanded === item.id}
                        tabIndex={0}
                        key={item.id}
                        onAction={(event) => {
                            setExpanded(event.expanded ? "" : item.id);
                        }}
                        >
                        <Reveal>
                            {expanded === item.id && (
                            <ExpansionPanelContent>
                                <ListViews />
                            </ExpansionPanelContent>
                            )}
                        </Reveal>
                        </ExpansionPanel>
                    ))}
                    </div>
                </div>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <div className="col-9">
                    <div className="row">
                        <div className="col-6">
                            <PieChart />
                        </div>
                        <div className="col-6">
                            <LineChart />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-11" style={{marginTop: "1rem"}}>
                        <Grid data={filterBy(data, gridFilterExpression)} style={{ height: 450 }} onDataChange={data => setData(data)}>
                            <Column title={localizationService.toLanguageString('custom.employee')} groupable={false}>
                                <Column field={'fullName'} title={localizationService.toLanguageString('custom.contactName')} columnMenu={ColumnMenu} width={230} cell={FullNameCell} />
                                <Column field={'jobTitle'} title={localizationService.toLanguageString('custom.jobTitle')} columnMenu={ColumnMenu} width={230} />
                                <Column field={'country'} title={localizationService.toLanguageString('custom.country')} columnMenu={ColumnMenu} width={100} cell={FlagCell} />
                                <Column field={'isOnline'} title={localizationService.toLanguageString('custom.status')} columnMenu={ColumnMenu} width={100} cell={OnlineCell} filter={'boolean'} />
                            </Column>
                            <Column title={localizationService.toLanguageString('custom.performance')} groupable={false}>
                                <Column field={'rating'} title={localizationService.toLanguageString('custom.rating')} columnMenu={ColumnMenu} width={110} cell={RatingCell} filter={'numeric'} />
                                <Column field={'target'} title={localizationService.toLanguageString('custom.engagement')} columnMenu={ColumnMenu} width={200} cell={EngagementCell} filter={'numeric'} />
                                <Column field={'budget'} title={localizationService.toLanguageString('custom.budget')} columnMenu={ColumnMenu} width={100} cell={CurrencyCell} filter={'numeric'} />
                            </Column>
                            <Column title={localizationService.toLanguageString('custom.contacts')} groupable={false}>
                                <Column field={'phone'} title={localizationService.toLanguageString('custom.phone')} columnMenu={ColumnMenu} width={130} />
                                <Column field={'address'} title={localizationService.toLanguageString('custom.address')} columnMenu={ColumnMenu} width={200} />
                            </Column>
                        </Grid>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;





//     return (
//         <div id="Dashboard" className="dashboard-page main-content">
//             <div className="card-container grid">
//                 <h3 className="card-title">{localizationService.toLanguageString('custom.teamEfficiency')}</h3>
//                 <div className="card-buttons">
//                     <ButtonGroup>
//                         <Button togglable={true} selected={isTrend} onClick={trendOnClick}>
//                             {localizationService.toLanguageString('custom.trend')}
//                         </Button>
//                         <Button togglable={true} selected={!isTrend} onClick={volumeOnClick}>
//                             {localizationService.toLanguageString('custom.volume')}
//                         </Button>
//                     </ButtonGroup>
//                 </div>
//                 <div className="card-ranges">
//                     <DateRangePicker value={range} onChange={onRangeChange} />
//                 </div>
//                 <div className="card-component">
//                     <LineChart />
//                     <Chart
//                         data={orders}
//                         filterStart={range.start}
//                         filterEnd={range.end}
//                         groupByField={'teamID'}
//                         groupResourceData={teams}
//                         groupTextField={'teamName'}
//                         groupColorField={'teamColor'}
//                         seriesCategoryField={'orderDate'}
//                         seriesField={'orderTotal'}
//                         seriesType={isTrend ? 'line' : 'column'}
//                         onRefresh={isChartChangeRef.current ? null : onChartRefresh}
//                     />
//                 </div>
//             </div>
//             <div className="card-container grid">
//                 <h3 className="card-title">{localizationService.toLanguageString('custom.teamMembers')}</h3>
//                 <div className="card-buttons">
//                     <ButtonGroup>
//                         <Button togglable={true} selected={isMyTeam} onClick={myTeamOnClick}>
//                             {localizationService.toLanguageString('custom.myTeam')}
//                         </Button>
//                         <Button togglable={true} selected={!isMyTeam} onClick={allTeamOnClick}>
//                             {localizationService.toLanguageString('custom.allTeams')}
//                         </Button>
//                     </ButtonGroup>
//                 </div>
//                 <span></span>
//                 <div className="card-component">
//                     <Grid data={filterBy(data, gridFilterExpression)} style={{ height: 450 }} onDataChange={data => setData(data)}>
//                         <Column title={localizationService.toLanguageString('custom.employee')} groupable={false}>
//                             <Column field={'fullName'} title={localizationService.toLanguageString('custom.contactName')} columnMenu={ColumnMenu} width={230} cell={FullNameCell} />
//                             <Column field={'jobTitle'} title={localizationService.toLanguageString('custom.jobTitle')} columnMenu={ColumnMenu} width={230} />
//                             <Column field={'country'} title={localizationService.toLanguageString('custom.country')} columnMenu={ColumnMenu} width={100} cell={FlagCell} />
//                             <Column field={'isOnline'} title={localizationService.toLanguageString('custom.status')} columnMenu={ColumnMenu} width={100} cell={OnlineCell} filter={'boolean'} />
//                         </Column>
//                         <Column title={localizationService.toLanguageString('custom.performance')} groupable={false}>
//                             <Column field={'rating'} title={localizationService.toLanguageString('custom.rating')} columnMenu={ColumnMenu} width={110} cell={RatingCell} filter={'numeric'} />
//                             <Column field={'target'} title={localizationService.toLanguageString('custom.engagement')} columnMenu={ColumnMenu} width={200} cell={EngagementCell} filter={'numeric'} />
//                             <Column field={'budget'} title={localizationService.toLanguageString('custom.budget')} columnMenu={ColumnMenu} width={100} cell={CurrencyCell} filter={'numeric'} />
//                         </Column>
//                         <Column title={localizationService.toLanguageString('custom.contacts')} groupable={false}>
//                             <Column field={'phone'} title={localizationService.toLanguageString('custom.phone')} columnMenu={ColumnMenu} width={130} />
//                             <Column field={'address'} title={localizationService.toLanguageString('custom.address')} columnMenu={ColumnMenu} width={200} />
//                         </Column>
//                     </Grid>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Dashboard;

