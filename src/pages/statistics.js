import React, { useEffect, useState } from 'react'
import Layout from "@components/Layout/Layout";
import BarChart from '@components/Chart/BarChart';
import DunotChart from '@components/Chart/DunotChart';
import { useFetchFacilityByStateStatistics } from '@hooks/usefetchFacilityByStateStatistics';
import { useFetchFacilityByLevelOfCare } from '@hooks/useFetchFacilityByLevelOfCare';
import { useFetchFacilityByOwnership } from '@hooks/usefetchFacilityByOwnership';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Statistics() {
    const [facilityByState, setFacilityByState] = useState([])
    const [barChartData, setBarChartData] = useState([])
    const [facilityByCareData, setfacilityByCareData] = useState([])
    const [facilityByOwnership, setFacilityByOwnership] = useState([])
    const [stateValue, setStateValue] = useState('FCT')
    const [stateLevelByCaraValue, setStateLevelByCaraValue] = useState('FCT')
    const [stateOwnershipValue, setstateOwnershipValue] = useState('FCT')
    const { isLoading, fetchedData, isError, status } = useFetchFacilityByStateStatistics()

    const { mutate, facilityLevelByCareData, facilityLevelByCareLoading, facilityLevelByCareStatus } = useFetchFacilityByLevelOfCare()

    const {
        facilityByOwnershipData,
        facilityByOwnershipLoading,
        facilityByOwnershipMutate,
        facilityByOwnershipStatus
    } = useFetchFacilityByOwnership()
    useEffect(() => {
        let statsArray = []
        if (fetchedData !== undefined) {
            fetchedData.data.data.map(element => (
                statsArray.push({
                    state: element.State,
                    labels: ['Hospital', 'Imaging', 'Laboratory', 'Phamacy'],
                    title: [
                        {
                            color: '#242F9B',
                            name: 'Hospital'
                        },
                        {
                            color: '#54249B',
                            name: 'Imaging'
                        },
                        {
                            color: '#247F9B',
                            name: 'Laboratory'
                        },
                        {
                            color: '#9B247F',
                            name: 'Phamacy'
                        }
                    ],
                    datasets: [
                        {
                            data: [
                                element.Hospitals ? element.Hospitals : 0,
                                element['Imaging/Radiological Center'] ? element['Imaging/Radiological Center'] : 0,
                                element.Laboratory ? element.Laboratory : 0,
                                element.Pharmacy ? element.Pharmacy : 0,
                            ],
                            backgroundColor: ['#242F9B', '#54249B', '#247F9B', '#9B247F']
                        }
                    ]
                })
            ))
            setFacilityByState(statsArray)
            let filteredFCT = statsArray.filter(item => item.state == stateValue)
            setBarChartData(filteredFCT)
        }
        mutate('fct')
        let hospital_count = facilityLevelByCareData?.data?.data?.facility_count.total_no_hospitals
        let imaging_count = facilityLevelByCareData?.data?.data?.facility_count.total_no_imaging_fac
        let labs_count = facilityLevelByCareData?.data?.data?.facility_count.total_no_labs
        let phamacy_count = facilityLevelByCareData?.data?.data?.facility_count.total_no_pharmacies

        let facilityBycare = [hospital_count, imaging_count, labs_count, phamacy_count]
        setfacilityByCareData(facilityBycare)

        facilityByOwnershipMutate('FCT')

        let ownershipArr = []
        facilityByOwnershipData?.data?.data?.hospitals.map(element => ownershipArr.push(element.total))
        setFacilityByOwnership(ownershipArr)
    }, [fetchedData])

    const handleChangeState = () => {
        const stateToFilter = event.target.value
        let filteredState = []
        filteredState = facilityByState.filter(item => item.state == stateToFilter)
        setStateValue(event.target.value)
        setBarChartData(filteredState)
    }
    const handleFetchFacilityByLevelOfCare = () => {
        const stateToFilter = event.target.value
        mutate(stateToFilter)
        let hospital_count = facilityLevelByCareData?.data?.data?.facility_count.total_no_hospitals
        let imaging_count = facilityLevelByCareData?.data?.data?.facility_count.total_no_imaging_fac
        let labs_count = facilityLevelByCareData?.data?.data?.facility_count.total_no_labs
        let phamacy_count = facilityLevelByCareData?.data?.data?.facility_count.total_no_pharmacies

        let facilityBycare = [hospital_count, imaging_count, labs_count, phamacy_count]
        setStateLevelByCaraValue(stateToFilter)
        setfacilityByCareData(facilityBycare)
        console.log(facilityBycare)
    }
    const handleFetchFacilityByOwnership = () => {
        facilityByOwnershipMutate(event.target.value)
        console.log(facilityByOwnershipData?.data?.data)
        console.log(facilityByOwnershipData?.data?.data?.hospitals)
        let ownershipArr = []
        facilityByOwnershipData?.data?.data?.hospitals.map(element => ownershipArr.push(element.total))
        setFacilityByOwnership(ownershipArr)
        console.log(facilityByOwnership)

        setstateOwnershipValue(event.target.value)

    }
    return (
        <Layout>
            <div className='px-20  py-[100px]'>
                <div className='lg:w-[750px] w-[350px] mx-auto shadow-xl px-5 py-5'>
                    <h2 className='text-xl'>Statistics</h2>
                    {
                        isLoading
                            ? <div>
                                <Skeleton className='pl-10 ' style={{ width: '100px', height: '30px' }} />
                                <div className='flex gap-14 justify-center'>
                                    <Skeleton className='mb-5' style={{ height: '350px', width: '5px' }} />
                                    <div className='flex gap-[80px] justify-center -mb-14'>
                                        <Skeleton style={{ height: '330px', width: '50px' }} />
                                        <Skeleton style={{ height: '330px', width: '50px' }} />
                                        <Skeleton style={{ height: '330px', width: '50px' }} />
                                        <Skeleton style={{ height: '330px', width: '50px' }} />
                                    </div>
                                </div>
                                <div className='flex justify-center -mt-6 ml-10'>
                                    <Skeleton style={{ width: '540px', height: '5px' }} />
                                </div>
                                <Skeleton style={{ height: '30px', width: '300px' }} />

                            </div>
                            : status === 'success'
                                ? <div >
                                    <div className='px-1 border border-[#B4B4B4] w-[105px] rounded-md my-3'>
                                        <select name='stateValue' value={stateValue} className='focus:outline-none py-1 text-sm' onChange={handleChangeState}>
                                            {
                                                facilityByState?.map(element => <option key={element.state} value={element.state}>{element.state}</option>)
                                            }
                                        </select>
                                    </div>
                                    <BarChart
                                        labels={barChartData.length === 0 ? ['Hospital', 'Imaging', 'Laboratory', 'Phamacy'] : barChartData[0].labels}
                                        data={barChartData[0]}
                                        loading={isLoading}
                                    />
                                </div>
                                : 'Error'


                    }
                </div>
                <div className='flex lg:flex-row flex-col justify-center gap-10  my-20'>
                    <div className='flex flex-col'>
                        <div className='px-7 py-7 border-b border-[#B4B4B4]'>
                            {facilityLevelByCareLoading
                                ? <Skeleton style={{ width: '150px', height: '20px' }} />
                                : <p>Based on level of care</p>
                            }
                        </div>
                        {
                            facilityLevelByCareLoading
                                ? <div className='shadow-xl px-7 py-7 w-[350px] min-w-[350px] max-w-[350px]'>
                                    <Skeleton className='h-7 mt-[30px]' style={{ width: '100px' }} />
                                    <Skeleton className='h-64  mx-auto mt-[20px]' style={{ borderRadius: '200px', width: '270px' }} />
                                    <Skeleton className='h-7 mt-[40px]' />
                                </div>
                                : <div className='shadow-xl px-7 py-7 w-[350px] min-w-[350px] max-w-[350px]'>
                                    <div className='px-1 border border-[#B4B4B4] w-[105px] rounded-md my-3'>
                                        <select name='stateLevelByCaraValue' value={stateLevelByCaraValue} className='focus:outline-none py-1 text-sm' onChange={handleFetchFacilityByLevelOfCare}>
                                            {
                                                facilityByState?.map(element => <option key={element.state} value={element.state}>{element.state}</option>)
                                            }
                                        </select>
                                    </div>
                                    <DunotChart
                                        data={facilityByCareData || [0, 0, 0, 0]}
                                        labels={['Hospital', 'Imaging', 'Laboratory', 'Phamacy']}
                                        colors={['#242F9B', '#54249B', '#247F9B', '#9B247F']}
                                    />
                                </div>
                        }
                    </div>
                    <div className='flex flex-col'>
                        <div className='px-7 py-7  border-b border-[#B4B4B4]'>
                            {facilityByOwnershipLoading
                                ? <Skeleton style={{ width: '150px', height: '20px' }} />
                                : <p>Based on ownership</p>
                            }

                        </div>
                        {
                            facilityByOwnershipLoading
                                ? <div className='shadow-xl px-7 py-7 w-[350px] min-w-[350px] max-w-[350px]'>
                                    <Skeleton className='h-7 mt-[30px]' style={{ width: '100px' }} />
                                    <Skeleton className='h-64  mx-auto mt-[20px]' style={{ borderRadius: '200px', width: '270px' }} />
                                    <Skeleton className='h-7 mt-[40px]' />
                                </div>
                                : <div className='shadow-xl px-7 py-7 w-[350px] min-w-[350px] max-w-[350px]'>
                                    <div className='px-1 border border-[#B4B4B4] w-[105px] rounded-md my-3'>
                                        <select name='stateOwnershipValue' value={stateOwnershipValue} className='focus:outline-none py-1 text-sm' onChange={handleFetchFacilityByOwnership}>
                                            {
                                                facilityByState?.map(element => <option key={element.state} value={element.state}>{element.state}</option>)
                                            }
                                        </select>
                                    </div>
                                    <DunotChart
                                        data={facilityByOwnership}
                                        labels={['Government', 'Private']}
                                        colors={['#242F9B', '#F806CC']}
                                    />
                                </div>
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}
