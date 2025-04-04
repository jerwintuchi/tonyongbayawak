import logging


def setup_logging():
    """Sets up the logging configuration."""
    log_filename = "debug_log.txt"
    logging.basicConfig(
        filename=log_filename,
        level=logging.INFO,
        format="%(asctime)s - %(message)s",
        datefmt="%Y-%m-%d %H:%M:%S"
    )
