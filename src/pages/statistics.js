import React, { useEffect, useState } from 'react'
import Layout from "@components/Layout/Layout";
import BarChart from '@components/Chart/BarChart';
import DunotChart from '@components/Chart/DunotChart';
import { useFetchFacilityByStateStatistics } from '@hooks/usefetchFacilityByStateStatistics';
import { useFetchFacilityByLevelOfCare } from '@hooks/useFetchFacilityByLevelOfCare';
import { useFetchFacilityByOwnership } from '@hooks/usefetchFacilityByOwnership';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import LoadingSpinner from '@components/LoadingSpinner/LoadingSpinner';

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
        <div className='w-full bg-white relative overflow-hidden select-none  z-2'>
            <Layout>
                <div className='w-[95vw] mx-auto px-5 lg:px-10 pt-[8%] pb-[6rem]'>

                    <h1 className="mt-[2rem] my-6 lg:text-[3.5vw] md:text-[5vw] text-[8vw] font-bold capitalize">
                        Statistics
                    </h1>
                    <p className="w-full md:w-3/5 text-sm">
                        Reporta Health is a platform that allows users identify and report
                        illegal healthcare facilities, and as well to rate the quality of
                        service provided to them in those facilities.
                    </p>

                    <div className='w-full grid lg:grid-cols-5 grid-cols-1 justify-items-stretch gap-[4rem] my-12'>
                        <div className='min-h-[110%] col-span-3 flex flex-col border-2 border-black/40  p-4 rounded-lg bg-white'>
                            <div className="w-full grid grid-cols-2 gap-2 justify-items-stretch border-b border-black/20 py-3 ">
                                <div className="">
                                    <h2 className='text-lg font-semibold'>Total facilities by state</h2>
                                </div>
                                <div className='px-1 border flex border-black/20 w-full rounded-md'>
                                    <select name='stateValue' value={stateValue} className='focus:outline-none py-1 lg:text-sm text-xs w-full' onChange={handleChangeState}>
                                        {
                                            facilityByState?.map(element => <option key={element.state} value={element.state}>{element.state}</option>)
                                        }
                                    </select>
                                </div>

                            </div>

                            {
                                isLoading
                                    ?
                                    <LoadingSpinner text='please wait...' className="font-3xl text-center" />
                                    : status === 'success'
                                        ? <div className=' p-2'>
                                            <BarChart
                                                labels={barChartData.length === 0 ? ['Hospital', 'Imaging', 'Laboratory', 'Phamacy'] : barChartData[0].labels}
                                                data={barChartData[0]}
                                                loading={isLoading}
                                            />
                                        </div>
                                        : 'Error'
                            }
                        </div>
                        <div className="col-span-2 grid grid-rows-2 grid-flow-row gap-[4rem]">
                            <div className='w-full min-h-[120%] flex flex-col items-center border-2 border-black/40  p-4 rounded-lg'>
                                <div className="w-full grid lg:grid-cols-2 gap-2 justify-items-stretch border-b border-black/20 py-3 ">
                                    <div className="">
                                        <h3 className='text-xs lg:text-sm font-semibold'>Based on level of care</h3>
                                    </div>
                                    <div className='px-1 border flex border-black/20 w-full rounded-md'>
                                        <select name='stateLevelByCaraValue' value={stateLevelByCaraValue} className='focus:outline-none py-1 lg:text-sm text-xs w-full' onChange={handleFetchFacilityByLevelOfCare}>
                                            {
                                                facilityByState?.map(element => <option key={element.state} value={element.state}>{element.state}</option>)
                                            }
                                        </select>
                                    </div>
                                </div>

                                {
                                    facilityLevelByCareLoading
                                        ? <LoadingSpinner text='please wait...' className="text-center" />
                                        : <div className='p-2'>
                                            <DunotChart
                                                data={facilityByCareData || [0, 0, 0, 0]}
                                                labels={['Hospital', 'Imaging', 'Laboratory', 'Pharmacy']}
                                                colors={['#242F9B', '#54249B', '#247F9B', '#9B247F']}
                                            />
                                        </div>
                                }
                            </div>
                            <div className='w-full min-h-[120%] flex flex-col items-center border-2 border-black/40  p-4 rounded-lg'>
                                <div className="w-full grid lg:grid-cols-2 gap-2 justify-items-stretch border-b border-black/20 py-3 ">
                                    <div className="">
                                        <h3 className='text-xs lg:text-sm font-semibold'>Based on ownership</h3>
                                    </div>
                                    <div className='px-1 border flex border-black/20 w-full rounded-md'>
                                        <select name='stateOwnershipValue' value={stateOwnershipValue} className='focus:outline-none py-1 lg:text-sm text-xs w-full' onChange={handleFetchFacilityByOwnership}>
                                            {
                                                facilityByState?.map(element => <option key={element.state} value={element.state}>{element.state}</option>)
                                            }
                                        </select>
                                    </div>
                                </div>
                                {
                                    facilityByOwnershipLoading
                                        ? <LoadingSpinner text='please wait...' className="text-center" />
                                        : <div className='p-2'>
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
                </div>
            </Layout>
        </div>
    )
}
