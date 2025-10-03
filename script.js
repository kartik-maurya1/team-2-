// Navigation functionality
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.add('hidden');
    });
    
    // Show selected page
    document.getElementById(pageId).classList.remove('hidden');
    
    // Update sidebar active state
    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.classList.remove('sidebar-active', 'text-indigo-600');
        item.classList.add('text-gray-600');
    });
    
    // Set active sidebar item
   const activeItem = document.querySelector(`[data-page="${pageId.replace('-page', '')}"]`);

    if (activeItem) {
        activeItem.classList.add('sidebar-active', 'text-indigo-600');
        activeItem.classList.remove('text-gray-600');
    }
}

// Sidebar click handlers
document.querySelectorAll('.sidebar-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const page = item.getAttribute('data-page');
        showPage(page + '-page');
    });
});

// Form handlers
function handleLogin(event) {
    event.preventDefault();
    alert('Login successful! Redirecting to dashboard...');
    showPage('dashboard-page');
}

function handleCourseSubmit(event) {
    event.preventDefault();
    alert('Course added successfully!');
    event.target.reset();
}

function handleFacultySubmit(event) {
    event.preventDefault();
    alert('Faculty availability updated successfully!');
}

function handleClassroomSubmit(event) {
    event.preventDefault();
    alert('Classroom added successfully!');
    event.target.reset();
}

// Timetable view toggle
function toggleView(view) {
    const calendarView = document.getElementById('calendar-view');
    const tableView = document.getElementById('table-view');
    const calendarBtn = document.getElementById('calendar-btn');
    const tableBtn = document.getElementById('table-btn');

    if (view === 'calendar') {
        calendarView.classList.remove('hidden');
        tableView.classList.add('hidden');
        calendarBtn.classList.add('bg-indigo-600', 'text-white');
        calendarBtn.classList.remove('bg-gray-200', 'text-gray-700');
        tableBtn.classList.add('bg-gray-200', 'text-gray-700');
        tableBtn.classList.remove('bg-indigo-600', 'text-white');
    } else {
        calendarView.classList.add('hidden');
        tableView.classList.remove('hidden');
        tableBtn.classList.add('bg-indigo-600', 'text-white');
        tableBtn.classList.remove('bg-gray-200', 'text-gray-700');
        calendarBtn.classList.add('bg-gray-200', 'text-gray-700');
        calendarBtn.classList.remove('bg-indigo-600', 'text-white');
    }
}

function viewTimetable(option) {
    alert(`Viewing detailed timetable for Option ${option}`);

}

// Approval modal functions
function showApprovalModal(action) {
    const modal = document.getElementById('approval-modal');
    const title = document.getElementById('modal-title');
    const actionBtn = document.getElementById('modal-action-btn');
    
    if (action === 'approve') {
        title.textContent = 'Approve Timetable';
        actionBtn.textContent = 'Approve';
        actionBtn.className = 'px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700';
    } else {
        title.textContent = 'Reject Timetable';
        actionBtn.textContent = 'Reject';
        actionBtn.className = 'px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700';
    }
    
    modal.classList.remove('hidden');
}

function closeApprovalModal() {
    document.getElementById('approval-modal').classList.add('hidden');
}

function handleApproval(event) {
    event.preventDefault();
    const action = document.getElementById('modal-action-btn').textContent.toLowerCase();
   alert("Timetable " + action + "d successfully!");

    closeApprovalModal();
}

// Mobile responsiveness
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('-translate-x-full');
}

// Initialize with dashboard
document.addEventListener('DOMContentLoaded', function() {
    showPage('dashboard-page');
});