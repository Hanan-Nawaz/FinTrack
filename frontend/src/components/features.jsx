import React from 'react'
import { FaReceipt, FaPiggyBank, FaFileExcel } from 'react-icons/fa';
import { MdCategory } from 'react-icons/md';
import { HiOutlineChartBar } from 'react-icons/hi';
import { IoMdPeople } from 'react-icons/io';

function features() {
    return (
        <div className='mx-10 md:mx-20 mb-10'>
            <div className='text-blue-800 font-semibold text-[30px] w-[100px] justify-center ml-auto mr-auto block'>Features<span className='block border-b-[1px] w-[50px] ml-auto mr-auto'></span></div>

            <div className="flex flex-col lg:flex-row mt-10">
                <div className="flex-1 flex flex-col md:mx-5 mb-4 border-1 border-gray-200 p-5 rounded shadow">
                    <span className='flex text-blue-800 text-[50px] justify-center mb-2'>{<FaReceipt />}</span>
                    <h1 className='text-center font-[1000] text-[20px] mb-2 '>Track Your Expense</h1>
                    <p className='text-justify mb-2'>FinTrack makes it incredibly easy to track your daily expenses. Whether it's a cup of coffee, groceries, or utility bills, you can log every transaction within seconds. Each entry is automatically timestamped and stored for future reference. The intuitive interface ensures you never miss a single detail. With consistent tracking, you'll gain full control over your financial habits.</p>
                </div>
                <div className="flex-1 flex flex-col md:mx-5 mb-4 border-1 border-gray-200 p-5 rounded shadow">
                    <span className='flex text-blue-800 text-[50px] mb-2 justify-center'>{<MdCategory />}</span>
                    <h1 className='text-center font-[1000] text-[20px] mb-2 '>Divide Expense in Categories</h1>
                    <p className='text-justify mb-2'>Take charge of your budgeting by organizing expenses into meaningful categories. FinTrack allows you to classify spending into groups like Food, Travel, Rent, Subscriptions, and more. This helps you quickly understand where your money is going and make informed adjustments. Custom categories let you tailor the app to your lifestyle. It's structure and simplicity working together.</p>
                </div>
                <div className="flex-1 flex flex-col md:mx-5 mb-4 border-1 border-gray-200 p-5 rounded shadow">
                    <span className='flex text-blue-800 text-[50px] justify-center mb-2'>{<HiOutlineChartBar />}</span>
                    <h1 className='text-center font-[1000] text-[20px]  mb-2'>Insightful Dashboard</h1>
                    <p className='text-justify mb-2'>Get a bird’s-eye view of your finances with FinTrack’s insightful dashboard. Visual charts, trends, and comparisons help you analyze your spending patterns with ease. Track monthly summaries, top categories, and cash flow in one place. It’s designed to turn complex data into actionable insights. With this clarity, managing money becomes a confident, informed process.</p>
                </div>
            </div>
             <div className="flex flex-col lg:flex-row mt-4">
                <div className="flex-1 flex flex-col md:mx-5 mb-4 border-1 border-gray-200 p-5 rounded shadow">
                    <span className='flex text-blue-800 text-[50px] justify-center mb-2 mb-2'>{<IoMdPeople />}</span>
                    <h1 className='text-center font-[1000] text-[20px] mb-2  mb-2'>Download Excel Reports</h1>
                    <p className='text-justify mb-2'>FinTrack gives you the power to export your financial data instantly. Download clean, structured Excel sheets that include all your expenses, categories, notes, and totals. It’s perfect for budgeting, tax planning, or professional record keeping. You can keep backups, share with advisors, or review offline. Your financial data is always just a click away.</p>
                </div>
                <div className="flex-1 flex flex-col md:mx-5 mb-4 border-1 border-gray-200 p-5 rounded shadow">
                    <span className='flex text-blue-800 text-[50px] justify-center mb-2'>{<FaPiggyBank />}</span>
                    <h1 className='text-center font-[1000] text-[20px]  mb-2'>Split Expense with Friends</h1>
                    <p className='text-justify mb-2'>Easily manage shared costs with FinTrack’s bill-splitting feature. Whether you're dining out, traveling, or paying rent with roommates, you can divide expenses quickly and fairly. The app calculates who owes what and tracks all balances. Automatic reminders ensure nobody forgets to settle up. Say goodbye to awkward conversations and hello to seamless sharing.</p>
                </div>
                <div className="flex-1 flex flex-col md:mx-5 mb-4 border-1 border-gray-200 p-5 rounded shadow">
                    <span className='flex text-blue-800 text-[50px] justify-center mb-2'>{<FaFileExcel />}</span>
                    <h1 className='text-center font-[1000] text-[20px]  mb-2'>Now Your Savings</h1>
                    <p className='text-justify mb-2'>Turn spending awareness into real savings. FinTrack shows you how much you’re saving each month by comparing income to expenses. You can set personal savings goals and visually track progress over time. Celebrate milestones as you grow your savings confidently. With FinTrack, saving money feels more like a reward than a routine.</p>
                </div>
            </div>
        </div>
    )
}

export default features;
