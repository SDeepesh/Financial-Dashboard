
# Financial Dashboard

## Overview
This project is a financial dashboard built with React, Redux, Chart.js and Tailwind CSS. It integrates various components to provide users with insights into their financial activities. The application features responsive design, dynamic data visualization, and modular reusable components.

---

## Features

### Dashboard Components
1. **My Cards**
   - Displays a list of user credit/debit cards with details such as balance, cardholder name, and expiry date.
   - Allows users to navigate to the full list of cards.
   - Component: `Card.jsx`【24†source】.

2. **Recent Transactions**
   - Lists recent financial transactions with details such as description, date, and amount.
   - Dynamically highlights positive or negative transactions.
   - Component: `RecentTransactions.jsx`【21†source】.

3. **Weekly Activity Chart**
   - Visualizes weekly financial activity using a bar chart powered by Chart.js.
   - Configurable chart options for responsiveness and user-friendly design.
   - Component: `WeeklyActivityChart.jsx`【22†source】.

4. **Expense Statistics**
   - Displays a breakdown of expenses in a pie chart format.
   - Includes percentage labels and customized tooltips.
   - Component: `ExpenseStatistics.jsx`【25†source】.

5. **Quick Transfer**
   - Allows users to quickly transfer funds to frequent recipients.
   - Includes user selection, scrollable lists, and an amount input field.
   - Component: `QuickTransfer.jsx`【26†source】.

6. **Balance History Chart**
   - Shows the user's financial balance history over time using a line chart.
   - Scales and gridlines are customized for better visualization.
   - Component: `BalanceHistoryChart.jsx`【23†source】.

### Profile Management
- Users can view and edit their profile information such as name, email, and address.
- Includes profile picture upload with a live preview feature.
- Built using Formik for form handling and Yup for validation.
- Component: `ProfileEdit.jsx`【27†source】.

---

## Technologies Used
- **React**: Core library for building user interfaces.
- **Redux**: State management for user and dashboard data.
- **Chart.js**: For rendering bar, pie, and line charts.
- **Formik & Yup**: Form management and validation for the profile edit form.
- **Tailwind CSS**: Utility-first CSS framework for responsive and consistent styling.
- **React-Router-Dom**: For client-side routing and navigation.

---

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/financial-dashboard.git
   cd financial-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open the application in your browser:
   ```
   http://localhost:3000
   ```

---

## File Structure

### Dashboard Components
- `Card.jsx` – Displays card information.
- `RecentTransactions.jsx` – Lists recent financial transactions.
- `WeeklyActivityChart.jsx` – Weekly activity bar chart.
- `ExpenseStatistics.jsx` – Expense pie chart.
- `QuickTransfer.jsx` – Quick fund transfer feature.
- `BalanceHistoryChart.jsx` – Financial balance history chart.

### Profile Management
- `ProfileEdit.jsx` – User profile editing form.

### Utilities
- Utility functions and reusable styles for consistent UI.

---

## Key Features by Component

### `Card.jsx`
- **Dynamic Themes**: Light and dark themes with conditional rendering.
- **Reusable Component**: Displays card details like balance, holder, expiry date, and masked card number.

### `RecentTransactions.jsx`
- **Transaction Mapping**: Dynamically displays transaction icons and styles based on the amount.

### `WeeklyActivityChart.jsx`
- **Bar Chart**: Visualizes weekly financial data.
- **Customization**: Configurable legends, tooltips, and axis styles.

### `ExpenseStatistics.jsx`
- **Pie Chart**: Displays expense statistics with data labels.
- **Interactive Design**: Highlights segments and displays percentages.

### `QuickTransfer.jsx`
- **User-Friendly Scrolling**: Smooth horizontal scrolling for selecting recipients.
- **Amount Input**: Customizable and styled input for transfer amounts.

### `BalanceHistoryChart.jsx`
- **Line Chart**: Displays trends in financial balance over time.
- **Customized Gridlines**: Improves data readability with styled scales.

### `ProfileEdit.jsx`
- **Formik Forms**: Handles profile editing with validation.
- **Profile Picture Upload**: Allows users to preview uploaded images.